 class CVManager {
            constructor() {
                this.skillTags = [];
                this.scrollOffset = 20;
                this.isDarkMode = false;
                this.currentLanguage = 'en';
                this.translations = {
                    en: {
                        "name": "Victoria Franc",
                        "title": "QA Engineer",
                        "skills": "Skills",
                        "about": "About",
                        "copyright": "© 2025 VF - QA Engineer",
                        "telegram": "Telegram",
                        "github": "GitHub",
                        "email": "Email",
                        "manualTesting": "Manual Testing",
                        "technicalSkills": "Technical Skills",
                        "automationTesting": "Automation Testing",
                        "tools": "Tools",
                        "softSkills": "Soft Skills",
                        "testCases": "Test cases & checklists",
                        "smokeRegression": "Smoke & regression testing",
                        "blackboxGraybox": "Black-box & gray-box testing",
                        "testPlans": "Test plans",
                        "linuxUnix": "Linux/Unix: terminal commands, SSH, file system",
                        "git": "Git: branching, updates, merges",
                        "sql": "SQL: data validation queries",
                        "apiTesting": "API Testing: HTTP, Postman, JSON validation",
                        "webTesting": "Web Testing: Chrome DevTools, CSS/HTML",
                        "mobileTesting": "Mobile Testing (web): UX best practices",
                        "cypress": "Cypress: UI testing, E2E coverage",
                        "playwright": "Playwright: API testing, CRUD operations, Schema validation, File export verification",
                        "schemaValidation": "Schema validation",
                        "fileExport": "File export verification",
                        "testManagement": "Test Management Systems",
                        "attentionDetail": "Strong attention to detail",
                        "analyticalThinking": "Analytical thinking",
                        "clearCommunication": "Clear communication",
                        "problemSolving": "Problem-solving & debugging",
                        "adaptability": "Adaptability & fast learning",
                        "timeManagement": "Time management",
                        "aboutText1": "I specialize in quality assurance with experience in manual and automation testing. I am also developing skills in prompt engineering. I combine attention to detail, critical thinking, and technical knowledge to deliver reliable results.",
                        "aboutText2": "My resilience and endurance — like swimming 25 meters butterfly with one breath — help me stay consistent and reach goals."
                    },
                    ua: {
                        "name": "Вікторія Ф.",
                        "title": "QA Інженер",
                        "skills": "Навички",
                        "about": "Про себе",
                        "copyright": "© 2025 VF - QA Інженер",
                        "telegram": "Telegram",
                        "github": "GitHub",
                        "email": "Email",
                        "manualTesting": "Мануальне тестування",
                        "technicalSkills": "Технічні навички",
                        "automationTesting": "Автоматизація тестування",
                        "tools": "Інструменти",
                        "softSkills": "Софт скіли",
                        "testCases": "Тест кейси та чеклисти",
                        "smokeRegression": "Smoke та regression тестування",
                        "blackboxGraybox": "Black-box та white-box тестування",
                        "testPlans": "Тест плани",
                        "linuxUnix": "Linux/Unix: термінал, SSH, файлова система",
                        "git": "Git: гілки, оновлення, мердж",
                        "sql": "SQL: запити для валідації даних",
                        "apiTesting": "API тестування: HTTP, Postman, JSON валідація",
                        "webTesting": "Web тестування: Chrome DevTools, CSS/HTML",
                        "mobileTesting": "Mobile тестування (web): UX best practices",
                        "cypress": "Cypress: UI тестування, E2E покриття",
                        "playwright": "Playwright: API тестування, CRUD операції",
                        "schemaValidation": "Валідація схем",
                        "fileExport": "Перевірка експорту файлів",
                        "testManagement": "Системи управління тестуванням",
                        "attentionDetail": "Увага до деталей",
                        "analyticalThinking": "Аналітичне мислення",
                        "clearCommunication": "Чітке спілкування",
                        "problemSolving": "Вирішення проблем та дебаггінг",
                        "adaptability": "Адаптивність та швидке навчання",
                        "timeManagement": "Тайм менеджмент",
                        "aboutText1": "Я спеціалізуюсь на забезпеченні якості з досвідом мануального та автоматизованого тестування. Також розвиваю навички в prompt engineering. Я поєдную увагу до деталей, критичне мислення та технічні знання для досягнення надійних результатів.",
                        "aboutText2": "Моя стійкість та витривалість — як плавання 25 метрів батерфляєм на одному вдиху — допомагають мені залишатися послідовною та досягати цілей."
                    }
                };
                this.init();
            }

            init() {
                this.loadThemePreference();
                this.loadLanguagePreference();
                this.setupThemeToggle();
                this.setupLanguageSwitch();
                this.setupSmoothScrolling();
                this.setupSkillTags();
                this.setupContactAnimations();
                this.setupSectionObservers();
                this.applyLanguage();
                
                setTimeout(() => {
                    document.body.classList.add('loaded');
                }, 100);
            }

            loadThemePreference() {
                const savedTheme = localStorage.getItem('darkMode');
                this.isDarkMode = savedTheme === 'true';
                this.applyTheme();
            }

            setupThemeToggle() {
                const themeToggle = document.getElementById('themeToggle');
                if (themeToggle) {
                    themeToggle.addEventListener('click', () => {
                        this.toggleTheme();
                    });
                }
            }

            toggleTheme() {
                this.isDarkMode = !this.isDarkMode;
                this.applyTheme();
                localStorage.setItem('darkMode', this.isDarkMode.toString());
            }

            applyTheme() {
                const themeIcon = document.querySelector('#themeToggle i');
                const body = document.body;
                
                if (this.isDarkMode) {
                    body.setAttribute('data-theme', 'dark');
                    if (themeIcon) {
                        themeIcon.className = 'fas fa-sun';
                    }
                } else {
                    body.removeAttribute('data-theme');
                    if (themeIcon) {
                        themeIcon.className = 'fas fa-moon';
                    }
                }
            }

            loadLanguagePreference() {
                const savedLanguage = localStorage.getItem('language');
                this.currentLanguage = savedLanguage || 'en';
                
                const languageSelect = document.getElementById('languageSelect');
                if (languageSelect) {
                    languageSelect.value = this.currentLanguage;
                }
            }

            setupLanguageSwitch() {
                const languageSelect = document.getElementById('languageSelect');
                if (languageSelect) {
                    languageSelect.addEventListener('change', (e) => {
                        this.currentLanguage = e.target.value;
                        this.applyLanguage();
                        localStorage.setItem('language', this.currentLanguage);
                    });
                }
            }

            applyLanguage() {
                const elements = document.querySelectorAll('[data-i18n]');
                
                elements.forEach((element) => {
                    const key = element.getAttribute('data-i18n');
                    if (key && this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                        const translation = this.translations[this.currentLanguage][key];
                        
                        if (element.innerHTML.includes('highlight')) {
                            element.innerHTML = translation;
                        } else {
                            element.textContent = translation;
                        }
                    }
                });
            }

            setupSmoothScrolling() {
                const links = document.querySelectorAll('a[href^="#"]');
                
                links.forEach((link) => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.handleSmoothScroll(link);
                    });
                });
            }

            handleSmoothScroll(link) {
                const targetId = link.getAttribute('href');
                
                if (!targetId) return;

                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        behavior: 'smooth',
                        top: targetElement.offsetTop - this.scrollOffset
                    });
                }
            }

            setupSkillTags() {
                const skillTags = document.querySelectorAll('.skill-tag');
                
                skillTags.forEach((tag) => {
                    this.addSkillTagEventListeners(tag);
                });
            }

            addSkillTagEventListeners(tag) {
                tag.addEventListener('mouseenter', () => {
                    this.animateSkillTag(tag, true);
                });
                
                tag.addEventListener('mouseleave', () => {
                    this.animateSkillTag(tag, false);
                });
            }

            animateSkillTag(tag, isHovered) {
                if (isHovered) {
                    tag.style.transform = 'translateY(-3px) scale(1.05)';
                    tag.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                } else {
                    tag.style.transform = 'translateY(0) scale(1)';
                    tag.style.boxShadow = 'none';
                }
            }

            setupContactAnimations() {
                const contactLinks = document.querySelectorAll('.contact-info a');
                
                contactLinks.forEach((link) => {
                    link.addEventListener('mouseenter', () => {
                        this.animateContactLink(link, true);
                    });
                    
                    link.addEventListener('mouseleave', () => {
                        this.animateContactLink(link, false);
                    });
                });
            }

            animateContactLink(link, isHovered) {
                if (isHovered) {
                    link.style.transform = 'translateY(-3px)';
                    link.style.color = '#f39c12';
                } else {
                    link.style.transform = 'translateY(0)';
                    link.style.color = 'white';
                }
            }

            setupSectionObservers() {
                const sections = document.querySelectorAll('section');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                sections.forEach((section) => {
                    observer.observe(section);
                });
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new CVManager();
        });