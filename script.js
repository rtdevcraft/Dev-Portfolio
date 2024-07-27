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
      logo8: '/assets/images/logo8.png',
      logo17: '/assets/images/logo17.png',
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
      logo8: '/assets/images/logo22.png',
      logo17: '/assets/images/logo18.png',
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
    emailImage: document.querySelector('.social-links img[src*="email"]'),
    resumeImage: document.querySelector('.social-links img[src*="resume"]'),
    introImage: document.querySelector('#about .header-image'),
    toolboxImage: document.querySelector('.toolbox .header-image'),
    workImage: document.querySelector('#work .header-image'),
    slides: document.querySelectorAll('.slide'),
    prevButton: document.querySelector('.nav-arrow.prev'),
    nextButton: document.querySelector('.nav-arrow.next'),
    logo8Image: document.querySelector('.marquee__group img[src*="logo8.png"]'),
    logo17Image: document.querySelector(
      '.marquee__group img[src*="logo17.png"]'
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
    const screenSize = isLargeScreen() ? 'large' : 'small';

    elements.header.style.backgroundImage = `url("${themeConfig[theme].headerBg}")`;
    elements.heroImage.src = themeConfig[theme].hero[screenSize];

    // Update other images
    elements.githubImage.src = themeConfig[theme].github;
    elements.linkedinImage.src = themeConfig[theme].linkedin;
    elements.emailImage.src = themeConfig[theme].email;
    elements.resumeImage.src = themeConfig[theme].resume;
    elements.introImage.src = themeConfig[theme].intro;
    elements.toolboxImage.src = themeConfig[theme].toolbox;
    elements.workImage.src = themeConfig[theme].work;
    elements.logo8Image.src = themeConfig[theme].logo8;
    elements.logo17Image.src = themeConfig[theme].logo17;
  }

  // Theme toggle function
  function toggleTheme() {
    const newTheme = getCurrentTheme() === 'light' ? 'dark' : 'light';
    elements.body.classList.remove('light-theme', 'dark-theme');
    elements.body.classList.add(`${newTheme}-theme`);
    updateImages(newTheme);
    localStorage.setItem('theme', newTheme);
    elements.themeToggle.setAttribute(
      'aria-label',
      `Switch to ${newTheme === 'light' ? 'dark' : 'light'} theme`
    );
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
    elements.themeToggle.setAttribute(
      'aria-label',
      `Switch to ${savedTheme === 'light' ? 'dark' : 'light'} theme`
    );
  }

  const slideBackgrounds = [
    { url: '/assets/images/slide1.jpg' },
    { url: '/assets/images/slide2.jpg' },
    { url: '/assets/images/slide3.jpg' },
    { url: 'https://mcdn.wallpapersafari.com/medium/18/88/gsAVlZ.jpg' },
  ];

  let currentIndex = 0;
  let intervalId;

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
    document.getElementById('slide-announcement').textContent =
      `Showing slide ${index + 1} of ${elements.slides.length}`;
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

  function startInterval() {
    stopInterval(); // Clear any existing interval
    intervalId = setInterval(nextSlide, 4000);
  }

  function stopInterval() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  // Keyboard navigation for slider
  function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft') {
      prevSlide();
      startInterval();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
      startInterval();
    }
  }

  // Menu toggle function
  function toggleMenu() {
    elements.navLinks.classList.toggle('active-menu');
    elements.hamburgerIcon.classList.toggle('active-icon');
    const isExpanded = elements.navLinks.classList.contains('active-menu');
    elements.hamburgerButton.setAttribute('aria-expanded', isExpanded);
  }

  // Event listeners
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.hamburgerButton.addEventListener('click', toggleMenu);

  elements.navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (elements.navLinks.classList.contains('active-menu')) {
        toggleMenu();
      }
    });
  });

  elements.slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      startInterval();
    });

    // Add focus event listener for keyboard navigation
    slide.addEventListener('focus', stopInterval);
    slide.addEventListener('blur', startInterval);
  });

  elements.nextButton.addEventListener('click', () => {
    nextSlide();
    startInterval();
  });

  elements.prevButton.addEventListener('click', () => {
    prevSlide();
    startInterval();
  });

  // Add keyboard event listener to the slider container
  document
    .querySelector('.slider-container')
    .addEventListener('keydown', handleKeyboardNavigation);

  // Window resize event listener
  window.addEventListener('resize', () => {
    updateImages(getCurrentTheme());
  });

  // Initialize
  initTheme();
  elements.slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url('${slideBackgrounds[index].url}')`;
  });
  showSlide(currentIndex);
  startInterval();

  // Create ARIA live region for slide announcements
  const liveRegion = document.createElement('div');
  liveRegion.id = 'slide-announcement';
  liveRegion.className = 'sr-only';
  liveRegion.setAttribute('aria-live', 'polite');
  document.body.appendChild(liveRegion);
});
