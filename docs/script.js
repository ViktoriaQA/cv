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
                        "copyright": "© 2025 VF",
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
                        "webTesting": "Web Testing: Chrome DevTools",
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
                        "aboutText1": "Responsible QA Engineer with 2+ years of experience in commercial projects. I specialize in quality assurance with expertise in manual and automation testing. Detail-oriented and skilled in Postman, Chrome DevTools, SQL (DBeaver), Git, Docker, and Linux, with strong knowledge of REST API testing, UI/UX validation, cross-browser testing, and CI/CD workflows. I combine attention to detail, critical thinking, and technical knowledge to deliver quality results.",
                        "aboutText2": "I maintain a focus on quality throughout the development lifecycle, without missing any small details."
                    },
                    ua: {
                        "name": "Вікторія Ф.",
                        "title": "QA Інженер",
                        "skills": "Навички",
                        "about": "Про себе",
                        "copyright": "© 2025 VF",
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
                        "webTesting": "Web тестування: Chrome DevTools",
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
                        "aboutText1": "Відповідальний інженер з контролю якості з більш ніж 2-річним досвідом роботи в комерційних проектах. Спеціалізуюся на забезпеченні якості з досвідом ручного та автоматизованого тестування. Орієнтований на деталі та маю досвід роботи з Postman, Chrome DevTools, SQL (DBeaver), Git, Docker та Linux, а також маю глибокі знання REST API-тестування, UI/UX-валідації, кросбраузерного тестування та робочих процесів CI/CD. Поєдную увагу до деталей, критичне мислення та технічні знання для досягнення якісних результатів.",
                        "aboutText2": "Зберігаю фокус на якості протягом усього життєвого циклу розробки, не пропускаючи дрібних деталей."
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
                this.setupNameClick();
                
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
            setupNameClick() {
                const nameElement = document.querySelector('.clickable-name');
                const aboutSection = document.getElementById('about');
                
                if (nameElement && aboutSection) {
                    // Для кліку
                    nameElement.addEventListener('click', () => {
                        this.scrollAndHighlightAbout();
                    });
                    
                    // Для тач-пристроїв
                    nameElement.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        this.scrollAndHighlightAbout();
                    });
                    
                    nameElement.style.cursor = 'pointer';
                    nameElement.style.userSelect = 'none'; // Забороняємо виділення тексту
                }
            }

            setupNameClick() {
                const nameElement = document.querySelector('.clickable-name');
                const aboutSection = document.getElementById('about');
                
                if (nameElement && aboutSection) {
                    nameElement.addEventListener('click', () => {
                        this.scrollAndHighlightAbout();
                    });
                    
                    // Додаємо також курсор-покажчик через JS для надійності
                    nameElement.style.cursor = 'pointer';
                }
            }
            
            scrollAndHighlightAbout() {
                const aboutSection = document.getElementById('about');
                if (!aboutSection) return;
                
                // Скролимо до секції
                window.scrollTo({
                    behavior: 'smooth',
                    top: aboutSection.offsetTop - this.scrollOffset
                });
                
                // Додаємо клас підсвітки
                aboutSection.classList.add('highlighted');
                aboutSection.classList.add('about-section'); // Додатково для специфічності
                
                // Видаляємо підсвітку через 2 секунди
                setTimeout(() => {
                    aboutSection.classList.remove('highlighted');
                }, 2000);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new CVManager();
        });