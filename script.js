document.addEventListener('DOMContentLoaded', function () {
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
    reactRouterLogoImage: document.querySelector(
      '.marquee__group img[src*="reactrouterlogo"]'
    ),
    githubLogoImage: document.querySelector(
      '.marquee__group img[src*="githublogo"]'
    ),
  };

  // Function to determine if the screen is large
  function isLargeScreen() {
    return window.matchMedia('(min-width: 1000px)').matches;
  }

  // Function to get the current theme
  function getCurrentTheme() {
    return elements.body.classList.contains('light-theme') ? 'light' : 'dark';
  }

  // Update images based on theme and screen size
  function updateImages(theme) {
    if (elements.header) {
      elements.header.style.backgroundImage = `url("${themeConfig[theme].headerBg}")`;
    }
    if (elements.heroImage) {
      elements.heroImage.src =
        themeConfig[theme].hero[isLargeScreen() ? 'large' : 'small'];
    }

    // Update other images if they exist
    if (elements.githubImage)
      elements.githubImage.src = themeConfig[theme].github;
    if (elements.linkedinImage)
      elements.linkedinImage.src = themeConfig[theme].linkedin;
    if (elements.emailImage) elements.emailImage.src = themeConfig[theme].email;
    if (elements.resumeImage)
      elements.resumeImage.src = themeConfig[theme].resume;
    if (elements.introImage) elements.introImage.src = themeConfig[theme].intro;
    if (elements.toolboxImage)
      elements.toolboxImage.src = themeConfig[theme].toolbox;
    if (elements.workImage) elements.workImage.src = themeConfig[theme].work;
    if (elements.emailMeImage)
      elements.emailMeImage.src = themeConfig[theme].emailMe;
    if (elements.copyEmailIcon)
      elements.copyEmailIcon.src = themeConfig[theme].copyEmailIcon;
    if (elements.reactRouterLogoImage)
      elements.reactRouterLogoImage.src =
        themeConfig[theme].reactRouterLogoImage;
    if (elements.githubLogoImage)
      elements.githubLogoImage.src = themeConfig[theme].githubLogoImage;
  }

  // Theme toggle function
  function toggleTheme() {
    const newTheme = getCurrentTheme() === 'light' ? 'dark' : 'light';
    elements.body.classList.remove('light-theme', 'dark-theme');
    elements.body.classList.add(`${newTheme}-theme`);
    updateImages(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelectorAll('.switch-theme').forEach((button) => {
      button.setAttribute(
        'aria-label',
        `Switch to ${newTheme === 'light' ? 'dark' : 'light'} theme`
      );
    });
  }

  // Initialize theme
  function initTheme() {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    elements.body.classList.add(`${savedTheme}-theme`);
    updateImages(savedTheme);
    document.querySelectorAll('.switch-theme').forEach((button) => {
      button.setAttribute(
        'aria-label',
        `Switch to ${savedTheme === 'light' ? 'dark' : 'light'} theme`
      );
    });
  }

  // Slider functions
  const slideBackgrounds = [
    { url: '/assets/images/slide1.jpg' },
    { url: '/assets/images/slide2.jpg' },
    { url: '/assets/images/slide3.jpg' },
    { url: 'https://mcdn.wallpapersafari.com/medium/18/88/gsAVlZ.jpg' },
  ];

  let currentIndex = 0;

  function showSlide(index) {
    elements.slides.forEach((slide, i) => {
      const content = slide.querySelector('.slide__content');
      if (i === index) {
        slide.classList.add('active');
        slide.classList.remove('nonActive');
        slide.style.backgroundImage = `url('${slideBackgrounds[i].url}')`;
        if (content) content.style.display = 'flex';
        slide.setAttribute('aria-hidden', 'false');
        slide.setAttribute('tabindex', '0');
      } else {
        slide.classList.remove('active');
        slide.classList.add('nonActive');
        if (content) content.style.display = 'none';
        slide.setAttribute('aria-hidden', 'true');
        slide.setAttribute('tabindex', '-1');
      }
    });

    // Update ARIA live region
    const slideAnnouncement = document.getElementById('slide-announcement');
    if (slideAnnouncement) {
      slideAnnouncement.textContent = `Showing slide ${index + 1} of ${elements.slides.length}`;
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % elements.slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + elements.slides.length) % elements.slides.length;
    showSlide(currentIndex);
  }

  // Keyboard navigation for slider
  function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  }

  // Menu toggle function
  function toggleMenu() {
    elements.navLinks.classList.toggle('active-menu');
    elements.hamburgerIcon.classList.toggle('active-icon');
    const isExpanded = elements.navLinks.classList.contains('active-menu');
    elements.hamburgerButton.setAttribute('aria-expanded', isExpanded);
  }

  // Initialize slider
  function initSlider() {
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

    if (elements.nextButton) {
      elements.nextButton.addEventListener('click', nextSlide);
    }

    if (elements.prevButton) {
      elements.prevButton.addEventListener('click', prevSlide);
    }

    // Add keyboard event listener to the slider container
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('keydown', handleKeyboardNavigation);
    }
  }

  // Initialize everything
  function init() {
    initTheme();
    if (document.querySelector('.slider-container')) {
      initSlider();
    }

    // Event listeners
    document.querySelectorAll('.switch-theme').forEach((button) => {
      button.addEventListener('click', toggleTheme);
    });

    if (elements.themeToggle) {
      elements.themeToggle.addEventListener('click', toggleTheme);
    }
    if (elements.hamburgerButton) {
      elements.hamburgerButton.addEventListener('click', toggleMenu);
    }

    if (elements.navLinks) {
      elements.navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          if (elements.navLinks.classList.contains('active-menu')) {
            toggleMenu();
          }
        });
      });
    }

    // Create ARIA live region for slide announcements
    const liveRegion = document.createElement('div');
    liveRegion.id = 'slide-announcement';
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('aria-live', 'polite');
    document.body.appendChild(liveRegion);

    // Window resize event listener
    window.addEventListener('resize', () => {
      updateImages(getCurrentTheme());
    });
  }

  // Run initialization
  init();
});

// Toast Notification

class ToastNotification {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'toast-container';
    document.body.appendChild(this.container);

    // Apply styles to the container
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

    // Apply styles to the toast
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

    // Make the toast visible
    toast.style.opacity = '1';

    // Remove the toast after the specified duration
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.addEventListener('transitionend', () => {
        this.container.removeChild(toast);
      });
    }, duration);
  }
}

// Create a global instance of ToastNotification
window.toastNotification = new ToastNotification();

document.addEventListener('DOMContentLoaded', function () {
  const copyEmailIcon = document.getElementById('copy-email-icon');
  const emailLink = document.querySelector('.email-me__text a[data-email]');

  if (copyEmailIcon && emailLink) {
    copyEmailIcon.addEventListener('click', function (e) {
      e.preventDefault();
      const email = emailLink.getAttribute('data-email');

      navigator.clipboard
        .writeText(email)
        .then(() => {
          // Show toast notification
          window.toastNotification.show('Email copied to clipboard!');

          // Optional: Provide visual feedback on the icon
          copyEmailIcon.classList.add('copied');
          setTimeout(() => {
            copyEmailIcon.classList.remove('copied');
          }, 2000);

          // Announce to screen readers
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
    });
  }
});
