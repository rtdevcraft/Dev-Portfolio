export {};

// Interfaces
interface ThemeImages {
  headerBg: string;
  hero: {
    small: string;
    large: string;
  };
  github: string;
  linkedin: string;
  email: string;
  resume: string;
  intro: string;
  toolbox: string;
  work: string;
  emailMe: string;
  copyEmailIcon: string;
  reactRouterLogoImage: string;
  githubLogoImage: string;
}

interface ThemeConfig {
  light: ThemeImages;
  dark: ThemeImages;
}

interface DOMElements {
  themeToggle: HTMLElement | null;
  hamburgerButton: HTMLElement | null;
  hamburgerIcon: HTMLElement | null;
  body: HTMLElement;
  header: HTMLElement | null;
  navLinks: HTMLElement | null;
  heroImage: HTMLImageElement | null;
  githubImage: HTMLImageElement | null;
  linkedinImage: HTMLImageElement | null;
  emailImage: HTMLImageElement | null;
  resumeImage: HTMLImageElement | null;
  introImage: HTMLImageElement | null;
  toolboxImage: HTMLImageElement | null;
  workImage: HTMLImageElement | null;
  emailMeImage: HTMLImageElement | null;
  copyEmailIcon: HTMLImageElement | null;
  slides: NodeListOf<HTMLElement>;
  prevButton: HTMLElement | null;
  nextButton: HTMLElement | null;
  reactRouterLogoImage: HTMLImageElement | null;
  githubLogoImage: HTMLImageElement | null;
}

interface SlideBackground {
  url: string;
}

interface Window {
  toastNotification: IToastNotification;
}

interface IToastNotification {
  show(message: string, duration?: number): void;
}

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
const elements: DOMElements = {
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
  reactRouterLogoImage: document.querySelector(
    '.marquee__group img[src*="reactrouterlogo"]'
  ),
  githubLogoImage: document.querySelector(
    '.marquee__group img[src*="githublogo"]'
  ),
};

// Functions
const isLargeScreen = (): boolean =>
  window.matchMedia('(min-width: 1000px)').matches;

const getCurrentTheme = (): 'light' | 'dark' =>
  elements.body.classList.contains('light-theme') ? 'light' : 'dark';

function updateImages(theme: 'light' | 'dark'): void {
  const config = themeConfig[theme];

  // Update header background
  const header = document.querySelector('header');
  if (header) {
    header.style.backgroundImage = `url("${config.headerBg}")`;
  }

  // Update hero image
  const heroImage = document.querySelector('.hero__image') as HTMLImageElement | null;
  if (heroImage) {
    heroImage.src = isLargeScreen() ? config.hero.large : config.hero.small;
  }

  // Update other images
  const imageMappings: [string, keyof ThemeImages][] = [
    ['.social-links img[src*="github"]', 'github'],
    ['.social-links img[src*="linkedin"]', 'linkedin'],
    ['a[href^="mailto:"] img', 'email'],
    ['.social-links img[src*="resume"]', 'resume'],
    ['#about .header-image', 'intro'],
    ['#toolbox .header-image', 'toolbox'],
    ['#work .header-image', 'work'],
    ['#email-me .header-image', 'emailMe'],
    ['#email-me img[src*="copy-email"]', 'copyEmailIcon'],
    ['.marquee__group img[src*="reactrouterlogo"]', 'reactRouterLogoImage'],
    ['.marquee__group img[src*="githublogo"]', 'githubLogoImage']
  ];

  imageMappings.forEach(([selector, key]) => {
    const img = document.querySelector(selector) as HTMLImageElement | null;
    if (img) {
      img.src = config[key];
    }
  });
}

const function toggleTheme(): void {
  const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.body.classList.remove(`${currentTheme}-theme`);
  document.body.classList.add(`${newTheme}-theme`);

  updateImages(newTheme);

  localStorage.setItem('theme', newTheme);

  // Update aria-label for theme toggle buttons
  document.querySelectorAll('.switch-theme').forEach((button) => {
    button.setAttribute('aria-label', `Switch to ${newTheme === 'light' ? 'dark' : 'light'} theme`);
  });
}

function initTheme(): void {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.body.classList.add(`${theme}-theme`);
  updateImages(theme);

  // Set initial aria-label for theme toggle buttons
  document.querySelectorAll('.switch-theme').forEach((button) => {
    button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
  });
}

// Slider functions
const slideBackgrounds: SlideBackground[] = [
  { url: '/assets/images/slide1.jpg' },
  { url: '/assets/images/slide2.jpg' },
  { url: '/assets/images/slide3.jpg' },
  { url: 'https://mcdn.wallpapersafari.com/medium/18/88/gsAVlZ.jpg' },
];

let currentIndex = 0;

const showSlide = (index: number): void => {
  elements.slides.forEach((slide, i) => {
    const content = slide.querySelector('.slide__content');
    if (i === index) {
      slide.classList.add('active');
      slide.classList.remove('nonActive');
      slide.style.backgroundImage = `url('${slideBackgrounds[i].url}')`;
      if (content) (content as HTMLElement).style.display = 'flex';
      slide.setAttribute('aria-hidden', 'false');
      slide.setAttribute('tabindex', '0');
    } else {
      slide.classList.remove('active');
      slide.classList.add('nonActive');
      if (content) (content as HTMLElement).style.display = 'none';
      slide.setAttribute('aria-hidden', 'true');
      slide.setAttribute('tabindex', '-1');
    }
  });

  const slideAnnouncement = document.getElementById('slide-announcement');
  if (slideAnnouncement) {
    slideAnnouncement.textContent = `Showing slide ${index + 1} of ${elements.slides.length}`;
  }
};

const nextSlide = (): void => {
  currentIndex = (currentIndex + 1) % elements.slides.length;
  showSlide(currentIndex);
};

const prevSlide = (): void => {
  currentIndex =
    (currentIndex - 1 + elements.slides.length) % elements.slides.length;
  showSlide(currentIndex);
};

const handleKeyboardNavigation = (event: KeyboardEvent): void => {
  if (event.key === 'ArrowLeft') {
    prevSlide();
  } else if (event.key === 'ArrowRight') {
    nextSlide();
  }
};

const toggleMenu = (): void => {
  elements.navLinks?.classList.toggle('active-menu');
  elements.hamburgerIcon?.classList.toggle('active-icon');
  const isExpanded = elements.navLinks?.classList.contains('active-menu');
  elements.hamburgerButton?.setAttribute('aria-expanded', String(isExpanded));
};

const initSlider = (): void => {
  if (elements.slides.length > 0) {
    elements.slides.forEach((slide, index) => {
      if (slideBackgrounds[index]) {
        slide.style.backgroundImage = `url('${slideBackgrounds[index].url}')`;
      }
    });
    showSlide(currentIndex);
  } else {
    console.warn('No slides found');
  }

  elements.nextButton?.addEventListener('click', nextSlide);
  elements.prevButton?.addEventListener('click', prevSlide);

  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer?.addEventListener('keydown', (event: Event) => {
    handleKeyboardNavigation(event as KeyboardEvent);
  });
};

const init = (): void => {
  initTheme();
  if (document.querySelector('.slider-container')) {
    initSlider();
  }

  document.querySelectorAll('.switch-theme').forEach((button) => {
    button.addEventListener('click', toggleTheme);
  });

  elements.themeToggle?.addEventListener('click', toggleTheme);
  elements.hamburgerButton?.addEventListener('click', toggleMenu);

  elements.navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (elements.navLinks?.classList.contains('active-menu')) {
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
class ToastNotificationImpl implements IToastNotification {
  private container: HTMLDivElement;

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

  show(message: string, duration = 3000): void {
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

// Global augmentation
declare global {
  interface Window {
    toastNotification: IToastNotification;
  }
}

// Create the global instance
window.toastNotification = new ToastNotificationImpl();

document.addEventListener('DOMContentLoaded', () => {
  init();

  const copyEmailIcon = document.getElementById('copy-email-icon');
  const emailLink = document.querySelector(
    '.email-me__text a[data-email]'
  ) as HTMLAnchorElement | null;

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
            window.toastNotification.show(
              'Failed to copy email. Please try again.'
            );
          });
      }
    });
  }
});
