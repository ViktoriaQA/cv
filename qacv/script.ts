// Interface definitions
interface SkillTag {
    element: HTMLElement;
    originalTransform: string;
    originalBoxShadow: string;
}

interface ScrollConfig {
    behavior: 'smooth';
    top: number;
}

// CV Manager Class
class CVManager {
    private skillTags: SkillTag[] = [];
    private readonly scrollOffset: number = 20;

    constructor() {
        this.init();
    }

    // Initialize all functionality
    public init(): void {
        this.setupSmoothScrolling();
        this.setupSkillTags();
        this.setupContactAnimations();
        this.setupSectionObservers();
    }

    // Setup smooth scrolling for navigation links
    private setupSmoothScrolling(): void {
        const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');
        
        links.forEach((link: HTMLAnchorElement) => {
            link.addEventListener('click', (e: Event) => {
                e.preventDefault();
                this.handleSmoothScroll(link);
            });
        });
    }

    private handleSmoothScroll(link: HTMLAnchorElement): void {
        const targetId: string | null = link.getAttribute('href');
        
        if (!targetId) return;

        const targetElement: HTMLElement | null = document.querySelector(targetId);
        
        if (targetElement) {
            const scrollConfig: ScrollConfig = {
                behavior: 'smooth',
                top: targetElement.offsetTop - this.scrollOffset
            };
            
            window.scrollTo(scrollConfig);
        }
    }

    // Setup skill tags animations
    private setupSkillTags(): void {
        const skillTags: NodeListOf<HTMLElement> = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach((tag: HTMLElement) => {
            const skillTag: SkillTag = {
                element: tag,
                originalTransform: tag.style.transform,
                originalBoxShadow: tag.style.boxShadow
            };

            this.skillTags.push(skillTag);

            this.addSkillTagEventListeners(tag);
        });
    }

    private addSkillTagEventListeners(tag: HTMLElement): void {
        tag.addEventListener('mouseenter', () => {
            this.animateSkillTag(tag, true);
        });
        
        tag.addEventListener('mouseleave', () => {
            this.animateSkillTag(tag, false);
        });

        tag.addEventListener('focus', () => {
            this.animateSkillTag(tag, true);
        });

        tag.addEventListener('blur', () => {
            this.animateSkillTag(tag, false);
        });
    }

    private animateSkillTag(tag: HTMLElement, isHovered: boolean): void {
        if (isHovered) {
            tag.style.transform = 'translateY(-3px) scale(1.05)';
            tag.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            tag.style.transition = 'all 0.3s ease';
        } else {
            tag.style.transform = 'translateY(0) scale(1)';
            tag.style.boxShadow = 'none';
        }
    }

    // Setup contact info animations
    private setupContactAnimations(): void {
        const contactLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.contact-info a');
        
        contactLinks.forEach((link: HTMLAnchorElement) => {
            link.addEventListener('mouseenter', () => {
                this.animateContactLink(link, true);
            });
            
            link.addEventListener('mouseleave', () => {
                this.animateContactLink(link, false);
            });
        });
    }

    private animateContactLink(link: HTMLAnchorElement, isHovered: boolean): void {
        if (isHovered) {
            link.style.transform = 'translateY(-3px)';
            link.style.color = '#f39c12';
        } else {
            link.style.transform = 'translateY(0)';
            link.style.color = 'white';
        }
    }

    // Setup intersection observer for section animations
    private setupSectionObservers(): void {
        const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
        
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const sectionObserver: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    this.animateSection(entry.target as HTMLElement);
                }
            });
        }, observerOptions);

        sections.forEach((section: HTMLElement) => {
            sectionObserver.observe(section);
        });
    }

    private animateSection(section: HTMLElement): void {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }

    // Utility method to check if element is in viewport
    private isElementInViewport(element: HTMLElement): boolean {
        const rect: DOMRect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Public method to refresh animations (useful for dynamic content)
    public refreshAnimations(): void {
        this.skillTags = [];
        this.setupSkillTags();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cvManager: CVManager = new CVManager();
    
    // Add window resize handler for responsive adjustments
    window.addEventListener('resize', () => {
        // Refresh animations on resize if needed
        setTimeout(() => cvManager.refreshAnimations(), 100);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
            // Handle tab navigation for skill tags
            const focusedElement: Element | null = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('skill-tag')) {
                focusedElement.classList.add('keyboard-focused');
            }
        }
    });
});

// Additional utility functions
class CVUtils {
    // Method to dynamically update skill tags
    public static updateSkillTags(containerId: string, newSkills: string[]): void {
        const container: HTMLElement | null = document.getElementById(containerId);
        if (!container) return;

        // Clear existing tags
        container.innerHTML = '';

        // Add new skill tags
        newSkills.forEach((skill: string) => {
            const skillTag: HTMLSpanElement = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillTag.setAttribute('tabindex', '0');
            container.appendChild(skillTag);
        });
    }

    // Method to toggle dark mode
    public static toggleDarkMode(): void {
        const body: HTMLElement = document.body;
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        const isDarkMode: boolean = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode.toString());
    }

    // Method to initialize dark mode from preferences
    public static initDarkMode(): void {
        const darkModePreference: string | null = localStorage.getItem('darkMode');
        if (darkModePreference === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// Initialize dark mode on load
document.addEventListener('DOMContentLoaded', CVUtils.initDarkMode);