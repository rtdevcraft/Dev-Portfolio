export {};

// Type definitions
interface ThemeConfig {
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
  reactRouterLogoImages: string;
  githubLogoImages: string;
  rtImage: string;
  moreAbout: string;
  interests: string;
  recs: string;
  certs: string;
}

interface ThemeConfigs {
  light: ThemeConfig;
  dark: ThemeConfig;
}

interface CachedElements {
  themeToggle: HTMLButtonElement;
  hamburgerButton: HTMLButtonElement;
  hamburgerIcon: HTMLElement;
  body: HTMLElement;
  header: HTMLElement;
  navLinks: HTMLElement;
  heroImage: HTMLImageElement;
  githubImage: HTMLImageElement;
  linkedinImage: HTMLImageElement;
  emailImage: HTMLImageElement;
  resumeImage: HTMLImageElement;
  introImage: HTMLImageElement;
  toolboxImage: HTMLImageElement;
  workImage: HTMLImageElement;
  emailMeImage: HTMLImageElement;
  copyEmailIcon: HTMLImageElement;
  slides: NodeListOf<HTMLElement>;
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  reactRouterLogoImages: NodeListOf<HTMLImageElement>;
  githubLogoImages: NodeListOf<HTMLImageElement>;
  rtImage: HTMLImageElement;
  moreAboutImage: HTMLImageElement;
  interestsImage: HTMLImageElement;
  recsImage: HTMLImageElement;
  certsImage: HTMLImageElement;
}

interface SlideBackground {
  url: string;
}

// Theme configuration
const themeConfig: ThemeConfigs = {
  light: {
    headerBg: '/assets/images/header-bg-light.webp',
    hero: {
      small: '/assets/images/spot-light-sm.webp',
      large: '/assets/images/spot-light-lg.webp',
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
    reactRouterLogoImages: '/assets/images/ReactRouterlogo.png',
    githubLogoImages: '/assets/images/Githublogo.png',
    rtImage: '/assets/images/rt.png',
    moreAbout: '/assets/images/more-about.jpg',
    interests: '/assets/images/interests.jpg',
    recs: '/assets/images/recs.jpg',
    certs: '/assets/images/certs.jpg',
  },
  dark: {
    headerBg: '/assets/images/header-bg.webp',
    hero: {
      small: '/assets/images/spot-dark-sm.webp',
      large: '/assets/images/spot-dark-lg.webp',
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
    reactRouterLogoImages: '/assets/images/ReactRouterlogo-w.png',
    githubLogoImages: '/assets/images/Githublogo-w.png',
    rtImage: '/assets/images/rt-dark.png',
    moreAbout: '/assets/images/more-about-dark.jpg',
    interests: '/assets/images/interests-dark.jpg',
    recs: '/assets/images/recs-dark.jpg',
    certs: '/assets/images/certs-dark.jpg',
  },
};

// Cached DOM elements
const getCachedElements = (): CachedElements => ({
  themeToggle: document.getElementById('switch-theme') as HTMLButtonElement,
  hamburgerButton: document.getElementById(
    'hamburger-button'
  ) as HTMLButtonElement,
  hamburgerIcon: document.querySelector('.hamburger-icon') as HTMLElement,
  body: document.body,
  header: document.querySelector('header') as HTMLElement,
  navLinks: document.getElementById('nav-links') as HTMLElement,
  heroImage: document.querySelector('.hero__image') as HTMLImageElement,
  githubImage: document.querySelector(
    '.social-links img[src*="github"]'
  ) as HTMLImageElement,
  linkedinImage: document.querySelector(
    '.social-links img[src*="linkedin"]'
  ) as HTMLImageElement,
  emailImage: document.querySelector(
    'a[href^="mailto:"] img'
  ) as HTMLImageElement,
  resumeImage: document.querySelector(
    '.social-links img[src*="resume"]'
  ) as HTMLImageElement,
  introImage: document.querySelector(
    '#about .header-image'
  ) as HTMLImageElement,
  toolboxImage: document.querySelector(
    '#toolbox .header-image'
  ) as HTMLImageElement,
  workImage: document.querySelector('#work .header-image') as HTMLImageElement,
  emailMeImage: document.querySelector(
    '#email-me .header-image'
  ) as HTMLImageElement,
  copyEmailIcon: document.querySelector(
    '#email-me img[src*="copy-email"]'
  ) as HTMLImageElement,
  slides: document.querySelectorAll('.slide') as NodeListOf<HTMLElement>,
  prevButton: document.querySelector('.nav-arrow.prev') as HTMLButtonElement,
  nextButton: document.querySelector('.nav-arrow.next') as HTMLButtonElement,
  reactRouterLogoImages: document.querySelectorAll(
    '#toolbox .marquee__group img[src="/assets/images/ReactRouterlogo.png"]'
  ) as NodeListOf<HTMLImageElement>,
  githubLogoImages: document.querySelectorAll(
    '#toolbox .marquee__group img[src="/assets/images/Githublogo.png"]'
  ) as NodeListOf<HTMLImageElement>,
  rtImage: document.querySelector(
    '.about__hero-container .me-image'
  ) as HTMLImageElement,
  moreAboutImage: document.querySelector(
    '.about__more-about-me img[src="/assets/images/more-about.jpg"]'
  ) as HTMLImageElement,
  interestsImage: document.querySelector(
    '.about__interests img[src="/assets/images/interests.jpg"]'
  ) as HTMLImageElement,
  recsImage: document.querySelector(
    '.about__recs img[src="/assets/images/recs.jpg"]'
  ) as HTMLImageElement,
  certsImage: document.querySelector(
    '.about__certs img[src="/assets/images/certs.jpg"]'
  ) as HTMLImageElement,
});

// Helper functions
const isLargeScreen = (): boolean =>
  window.matchMedia('(min-width: 1000px)').matches;
const getCurrentTheme = (body: HTMLElement): 'light' | 'dark' =>
  body.classList.contains('light-theme') ? 'light' : 'dark';

// Update images based on theme and screen size
const updateImages = (
  elements: CachedElements,
  theme: 'light' | 'dark'
): void => {
  const config = themeConfig[theme];

  const imageMappings = [
    {
      element: elements.header,
      prop: 'backgroundImage',
      value: `url("${config.headerBg}")`,
    },
    {
      element: elements.heroImage,
      prop: 'src',
      value: config.hero[isLargeScreen() ? 'large' : 'small'],
    },
    { element: elements.githubImage, prop: 'src', value: config.github },
    { element: elements.linkedinImage, prop: 'src', value: config.linkedin },
    { element: elements.emailImage, prop: 'src', value: config.email },
    { element: elements.resumeImage, prop: 'src', value: config.resume },
    { element: elements.introImage, prop: 'src', value: config.intro },
    { element: elements.toolboxImage, prop: 'src', value: config.toolbox },
    { element: elements.workImage, prop: 'src', value: config.work },
    { element: elements.emailMeImage, prop: 'src', value: config.emailMe },
    {
      element: elements.copyEmailIcon,
      prop: 'src',
      value: config.copyEmailIcon,
    },
    {
      elements: elements.reactRouterLogoImages,
      value: config.reactRouterLogoImages,
    },
    {
      elements: elements.githubLogoImages,
      value: config.githubLogoImages,
    },
    { element: elements.rtImage, prop: 'src', value: config.rtImage },
    { element: elements.moreAboutImage, prop: 'src', value: config.moreAbout },
    { element: elements.interestsImage, prop: 'src', value: config.interests },
    { element: elements.recsImage, prop: 'src', value: config.recs },
    { element: elements.certsImage, prop: 'src', value: config.certs },
  ];

  imageMappings.forEach((mapping) => {
    if ('element' in mapping) {
      const { element, prop, value } = mapping;

      if (element) {
        if (prop === 'backgroundImage') {
          (element as HTMLElement).style.backgroundImage = value;
        } else if (prop === 'src') {
          (element as HTMLImageElement).src = value;
        }
      }
    } else if ('elements' in mapping) {
      const { elements, value } = mapping;

      if (elements instanceof NodeList) {
        elements.forEach((el, _index) => {
          if (el instanceof HTMLImageElement) {
            el.src = value;
          }
        });
      }
    }
  });
};
// Theme toggle function
const toggleTheme = (elements: CachedElements): void => {
  const currentTheme = getCurrentTheme(elements.body);
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  elements.body.classList.remove('light-theme', 'dark-theme');
  elements.body.classList.add(`${newTheme}-theme`);

  updateImages(elements, newTheme);

  localStorage.setItem('theme', newTheme);

  document.querySelectorAll('.switch-theme').forEach((button) => {
    button.setAttribute(
      'aria-label',
      `Switch to ${newTheme === 'light' ? 'dark' : 'light'} theme`
    );
  });
};

// Initialize theme
const initTheme = (elements: CachedElements): void => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  // Use light theme as default unless dark theme is explicitly saved or preferred
  const theme = savedTheme || (prefersDarkScheme ? 'dark' : 'light');

  elements.body.classList.add(`${theme}-theme`);
  updateImages(elements, theme);
  document.querySelectorAll('.switch-theme').forEach((button) => {
    button.setAttribute(
      'aria-label',
      `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`
    );
  });
};

// Slider functions
const slideBackgrounds: SlideBackground[] = [
  { url: '/assets/images/slide1.jpg' },
  { url: '/assets/images/slide2.jpg' },
  { url: '/assets/images/slide3.jpg' },
  { url: '/assets/images/slide4.jpg' },
];

const createSlider = (elements: CachedElements) => {
  let currentIndex = 0;

  const showSlide = (index: number): void => {
    elements.slides.forEach((slide, i) => {
      const content = slide.querySelector('.slide__content') as HTMLElement;
      const isActive = i === index;
      slide.classList.toggle('active', isActive);
      slide.classList.toggle('nonActive', !isActive);
      slide.style.backgroundImage = `url('${slideBackgrounds[i].url}')`;
      if (content) content.style.display = isActive ? 'flex' : 'none';
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      slide.setAttribute('tabindex', isActive ? '0' : '-1');
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

  return { showSlide, nextSlide, prevSlide, handleKeyboardNavigation };
};

const handleResponsiveMenu = (elements: CachedElements): void => {
  if (
    elements.navLinks &&
    elements.hamburgerIcon &&
    window.innerWidth >= 1000 &&
    elements.navLinks.classList.contains('active-menu')
  ) {
    elements.navLinks.classList.remove('active-menu');
    elements.hamburgerIcon.classList.remove('active-icon');
  }
};

// Menu toggle function
const toggleMenu = (elements: CachedElements): void => {
  if (elements.navLinks && elements.hamburgerIcon && elements.hamburgerButton) {
    elements.navLinks.classList.toggle('active-menu');
    elements.hamburgerIcon.classList.toggle('active-icon');
    const isExpanded = elements.navLinks.classList.contains('active-menu');
    elements.hamburgerButton.setAttribute(
      'aria-expanded',
      isExpanded.toString()
    );
  }
  // Close menu if window is larger than 1000px
  handleResponsiveMenu(elements);
};

// Initialize slider
const initSlider = (elements: CachedElements): void => {
  if (elements.slides.length > 0) {
    const { showSlide, nextSlide, prevSlide, handleKeyboardNavigation } =
      createSlider(elements);

    elements.slides.forEach((slide, index) => {
      if (slideBackgrounds[index]) {
        slide.style.backgroundImage = `url('${slideBackgrounds[index].url}')`;
      }
    });
    showSlide(0);

    if (elements.nextButton) {
      elements.nextButton.addEventListener('click', nextSlide);
    }

    if (elements.prevButton) {
      elements.prevButton.addEventListener('click', prevSlide);
    }

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('keydown', (event: Event) => {
        handleKeyboardNavigation(event as KeyboardEvent);
      });
    }
  } else {
    console.warn('No slides found');
  }
};

// Toast Notification
interface ToastNotification {
  show: (message: string, duration?: number) => void;
}

const createToastNotification = (): ToastNotification => {
  const container = document.createElement('div');
  container.id = 'toast-container';
  document.body.appendChild(container);

  Object.assign(container.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
  });

  const show = (message: string, duration = 3000): void => {
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

    container.appendChild(toast);

    // Trigger reflow to enable transition
    toast.offsetHeight;

    // Make the toast visible
    toast.style.opacity = '1';

    // Remove the toast after the specified duration
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.addEventListener('transitionend', () => {
        container.removeChild(toast);
      });
    }, duration);
  };

  return { show };
};

// Create a global instance of ToastNotification
declare global {
  interface Window {
    toastNotification: ToastNotification;
  }
}

window.toastNotification = createToastNotification();

// Initialize everything
const init = (): void => {
  const elements = getCachedElements();

  initTheme(elements);
  if (document.querySelector('.slider-container')) {
    initSlider(elements);
  }

  // Event listeners
  document.querySelectorAll('.switch-theme').forEach((button) => {
    button.addEventListener('click', () => toggleTheme(elements));
  });

  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', () => toggleTheme(elements));
  }
  if (elements.hamburgerButton) {
    elements.hamburgerButton.addEventListener('click', () =>
      toggleMenu(elements)
    );
  }

  if (elements.navLinks) {
    elements.navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (
          elements.navLinks &&
          elements.navLinks.classList.contains('active-menu')
        ) {
          toggleMenu(elements);
        }
      });
    });
  }

  // Window resize event listener
  window.addEventListener('resize', () => {
    updateImages(elements, getCurrentTheme(elements.body));
    handleResponsiveMenu(elements);
  });

  // Initial call to handleResponsiveMenu
  handleResponsiveMenu(elements);

  // Create ARIA live region for slide announcements
  const liveRegion = document.createElement('div');
  liveRegion.id = 'slide-announcement';
  liveRegion.className = 'sr-only';
  liveRegion.setAttribute('aria-live', 'polite');
  document.body.appendChild(liveRegion);

  // Email copy functionality
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
            window.toastNotification.show(
              'Failed to copy email. Please try again.'
            );
          });
      }
    });
  }
};

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
