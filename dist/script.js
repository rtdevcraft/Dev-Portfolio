// Theme configuration
const themeConfig = {
    light: {
        headerBg: '/assets/images/header-bg-light.jpg',
        hero: {
            small: '/assets/images/spot-light-sm.jpg',
            large: '/assets/images/spot-light-lg.jpg',
        },
        github: '/assets/images/github.png',
        linkedin: '/assets/images/linkedin.png',
        email: '/assets/images/email.png',
        resume: '/assets/images/resume.png',
        intro: '/assets/images/heylo.jpg',
        toolbox: '/assets/images/toolbox.jpg',
        work: '/assets/images/work.jpg',
        emailMe: '/assets/images/email-me.jpg',
        copyEmailIcon: '/assets/images/copy-email.png',
        reactRouterLogoImage: '/assets/images/ReactRouterlogo.png',
        githubLogoImage: '/assets/images/Githublogo.png',
    },
    dark: {
        headerBg: '/assets/images/header-bg.jpg',
        hero: {
            small: '/assets/images/spot-dark-sm.jpg',
            large: '/assets/images/spot-dark-lg.jpg',
        },
        github: '/assets/images/github-dark.png',
        linkedin: '/assets/images/linkedin-dark.png',
        email: '/assets/images/email-dark.png',
        resume: '/assets/images/resume-dark.png',
        intro: '/assets/images/heylo-dark.jpg',
        toolbox: '/assets/images/toolbox-dark.jpg',
        work: '/assets/images/work-dark.jpg',
        emailMe: '/assets/images/email-me-dark.jpg',
        copyEmailIcon: '/assets/images/copy-email-dark.png',
        reactRouterLogoImage: '/assets/images/ReactRouterlogo-w.png',
        githubLogoImage: '/assets/images/Githublogo-w.png',
    },
};
// Cache DOM elements
const elements = {
    themeToggle: document.getElementById('switch-theme'),
    hamburgerButton: document.getElementById('hamburger-button'),
    hamburgerIcon: document.querySelector('.hamburger-icon'),
    body: document.body,
    header: document.querySelector('header'),
    navLinks: document.getElementById('nav-links'),
    heroImage: document.querySelector('.hero__image'),
    githubImage: document.querySelector('.social-links img[src*="github"]'),
    linkedinImage: document.querySelector('.social-links img[src*="linkedin"]'),
    emailImage: document.querySelector('a[href^="mailto:"] img'),
    resumeImage: document.querySelector('.social-links img[src*="resume"]'),
    introImage: document.querySelector('#about .header-image'),
    toolboxImage: document.querySelector('#toolbox .header-image'),
    workImage: document.querySelector('#work .header-image'),
    emailMeImage: document.querySelector('#email-me .header-image'),
    copyEmailIcon: document.querySelector('#email-me img[src*="copy-email"]'),
    slides: document.querySelectorAll('.slide'),
    prevButton: document.querySelector('.nav-arrow.prev'),
    nextButton: document.querySelector('.nav-arrow.next'),
    reactRouterLogoImage: document.querySelector('.marquee__group img[src*="reactrouterlogo"]'),
    githubLogoImage: document.querySelector('.marquee__group img[src*="githublogo"]'),
};
// Functions
const isLargeScreen = () => window.matchMedia('(min-width: 1000px)').matches;
const getCurrentTheme = () => elements.body.classList.contains('light-theme') ? 'light' : 'dark';
const updateImages = (theme) => {
    const config = themeConfig[theme];
    if (elements.header) {
        elements.header.style.backgroundImage = `url("${config.headerBg}")`;
    }
    if (elements.heroImage) {
        elements.heroImage.src = isLargeScreen()
            ? config.hero.large
            : config.hero.small;
    }
    // Update other images
    const imageMappings = [
        [elements.githubImage, 'github'],
        [elements.linkedinImage, 'linkedin'],
        [elements.emailImage, 'email'],
        [elements.resumeImage, 'resume'],
        [elements.introImage, 'intro'],
        [elements.toolboxImage, 'toolbox'],
        [elements.workImage, 'work'],
        [elements.emailMeImage, 'emailMe'],
        [elements.copyEmailIcon, 'copyEmailIcon'],
        [elements.reactRouterLogoImage, 'reactRouterLogoImage'],
        [elements.githubLogoImage, 'githubLogoImage'],
    ];
    imageMappings.forEach(([element, key]) => {
        elements.heroImage.src = isLargeScreen()
            ? config.hero.large
            : config.hero.small;
    });
};
const toggleTheme = () => {
    const newTheme = getCurrentTheme() === 'light' ? 'dark' : 'light';
    elements.body.classList.remove('light-theme', 'dark-theme');
    elements.body.classList.add(`${newTheme}-theme`);
    updateImages(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelectorAll('.switch-theme').forEach((button) => {
        button.setAttribute('aria-label', `Switch to ${newTheme === 'light' ? 'dark' : 'light'} theme`);
    });
};
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    const theme = savedTheme || defaultTheme;
    elements.body.classList.add(`${theme}-theme`);
    updateImages(theme);
    document.querySelectorAll('.switch-theme').forEach((button) => {
        button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
    });
};
// Slider functions
const slideBackgrounds = [
    { url: '/assets/images/slide1.jpg' },
    { url: '/assets/images/slide2.jpg' },
    { url: '/assets/images/slide3.jpg' },
    { url: 'https://mcdn.wallpapersafari.com/medium/18/88/gsAVlZ.jpg' },
];
let currentIndex = 0;
const showSlide = (index) => {
    elements.slides.forEach((slide, i) => {
        const content = slide.querySelector('.slide__content');
        if (i === index) {
            slide.classList.add('active');
            slide.classList.remove('nonActive');
            slide.style.backgroundImage = `url('${slideBackgrounds[i].url}')`;
            if (content)
                content.style.display = 'flex';
            slide.setAttribute('aria-hidden', 'false');
            slide.setAttribute('tabindex', '0');
        }
        else {
            slide.classList.remove('active');
            slide.classList.add('nonActive');
            if (content)
                content.style.display = 'none';
            slide.setAttribute('aria-hidden', 'true');
            slide.setAttribute('tabindex', '-1');
        }
    });
    const slideAnnouncement = document.getElementById('slide-announcement');
    if (slideAnnouncement) {
        slideAnnouncement.textContent = `Showing slide ${index + 1} of ${elements.slides.length}`;
    }
};
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % elements.slides.length;
    showSlide(currentIndex);
};
const prevSlide = () => {
    currentIndex =
        (currentIndex - 1 + elements.slides.length) % elements.slides.length;
    showSlide(currentIndex);
};
const handleKeyboardNavigation = (event) => {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    }
    else if (event.key === 'ArrowRight') {
        nextSlide();
    }
};
const toggleMenu = () => {
    var _a, _b, _c, _d;
    (_a = elements.navLinks) === null || _a === void 0 ? void 0 : _a.classList.toggle('active-menu');
    (_b = elements.hamburgerIcon) === null || _b === void 0 ? void 0 : _b.classList.toggle('active-icon');
    const isExpanded = (_c = elements.navLinks) === null || _c === void 0 ? void 0 : _c.classList.contains('active-menu');
    (_d = elements.hamburgerButton) === null || _d === void 0 ? void 0 : _d.setAttribute('aria-expanded', String(isExpanded));
};
const initSlider = () => {
    var _a, _b;
    if (elements.slides.length > 0) {
        elements.slides.forEach((slide, index) => {
            if (slideBackgrounds[index]) {
                slide.style.backgroundImage = `url('${slideBackgrounds[index].url}')`;
            }
        });
        showSlide(currentIndex);
    }
    else {
        console.warn('No slides found');
    }
    (_a = elements.nextButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', nextSlide);
    (_b = elements.prevButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', prevSlide);
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer === null || sliderContainer === void 0 ? void 0 : sliderContainer.addEventListener('keydown', (event) => {
        handleKeyboardNavigation(event);
    });
};
const init = () => {
    var _a, _b, _c;
    initTheme();
    if (document.querySelector('.slider-container')) {
        initSlider();
    }
    document.querySelectorAll('.switch-theme').forEach((button) => {
        button.addEventListener('click', toggleTheme);
    });
    (_a = elements.themeToggle) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleTheme);
    (_b = elements.hamburgerButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', toggleMenu);
    (_c = elements.navLinks) === null || _c === void 0 ? void 0 : _c.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            var _a;
            if ((_a = elements.navLinks) === null || _a === void 0 ? void 0 : _a.classList.contains('active-menu')) {
                toggleMenu();
            }
        });
    });
    const liveRegion = document.createElement('div');
    liveRegion.id = 'slide-announcement';
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('aria-live', 'polite');
    document.body.appendChild(liveRegion);
    window.addEventListener('resize', () => {
        updateImages(getCurrentTheme());
    });
};
// Toast Notification
class ToastNotificationImpl {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'toast-container';
        document.body.appendChild(this.container);
        Object.assign(this.container.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000',
        });
    }
    show(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        Object.assign(toast.style, {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            marginTop: '10px',
            opacity: '0',
            transition: 'opacity 0.3s ease-in-out',
        });
        this.container.appendChild(toast);
        // Trigger reflow to enable transition
        toast.offsetHeight;
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.addEventListener('transitionend', () => {
                this.container.removeChild(toast);
            });
        }, duration);
    }
}
// Create the global instance
window.toastNotification = new ToastNotificationImpl();
document.addEventListener('DOMContentLoaded', () => {
    init();
    const copyEmailIcon = document.getElementById('copy-email-icon');
    const emailLink = document.querySelector('.email-me__text a[data-email]');
    if (copyEmailIcon && emailLink) {
        copyEmailIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailLink.getAttribute('data-email');
            if (email) {
                navigator.clipboard
                    .writeText(email)
                    .then(() => {
                    window.toastNotification.show('Email copied to clipboard!');
                    copyEmailIcon.classList.add('copied');
                    setTimeout(() => {
                        copyEmailIcon.classList.remove('copied');
                    }, 2000);
                    const announcement = document.createElement('div');
                    announcement.textContent = 'Email address copied to clipboard';
                    announcement.setAttribute('aria-live', 'polite');
                    announcement.style.position = 'absolute';
                    announcement.style.left = '-9999px';
                    document.body.appendChild(announcement);
                    setTimeout(() => {
                        document.body.removeChild(announcement);
                    }, 3000);
                })
                    .catch((err) => {
                    console.error('Failed to copy email: ', err);
                    window.toastNotification.show('Failed to copy email. Please try again.');
                });
            }
        });
    }
});
export {};
