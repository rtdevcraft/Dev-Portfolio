document.addEventListener('DOMContentLoaded', function () {
  // Theme configuration
  const themeConfig = {
    light: {
      headerBg: '/assets/images/header-bg-light.jpg',
      github: '/assets/images/github.png',
      linkedin: '/assets/images/linkedin.png',
      email: '/assets/images/email.png',
      resume: '/assets/images/resume.png',
      hero: '/assets/images/spot-light-sm.jpg',
      intro: '/assets/images/heylo.jpg',
      toolbox: '/assets/images/toolbox.jpg',
      work: '/assets/images/work.jpg',
    },
    dark: {
      headerBg: '/assets/images/header-bg.jpg',
      github: '/assets/images/github-dark.png',
      linkedin: '/assets/images/linkedin-dark.png',
      email: '/assets/images/email-dark.png',
      resume: '/assets/images/resume-dark.png',
      hero: '/assets/images/spot-dark-sm.jpg',
      intro: '/assets/images/heylo-dark.png',
      toolbox: '/assets/images/toolbox-dark.png',
      work: '/assets/images/work-dark.png',
    },
  };

  // Cache DOM elements
  const elements = {
    themeToggle: document.getElementById('switch-theme'),
    hamburgerButton: document.getElementById('hamburger-button'),
    navMenu: document.getElementById('nav-menu'),
    body: document.body,
    header: document.querySelector('header'),
    navLinks: document.getElementById('nav-links'),
    githubImage: document.querySelector('.social-links img[src*="github"]'),
    linkedinImage: document.querySelector('.social-links img[src*="linkedin"]'),
    emailImage: document.querySelector('.social-links img[src*="email"]'),
    resumeImage: document.querySelector('.social-links img[src*="resume"]'),
    heroImage: document.querySelector('.hero__image'),
    introImage: document.querySelector('#about .header-image'),
    toolboxImage: document.querySelector('.toolbox .header-image'),
    workImage: document.querySelector('#work .header-image'),
    slides: document.querySelectorAll('.slide'),
    prevButton: document.querySelector('.nav-arrow.prev'),
    nextButton: document.querySelector('.nav-arrow.next'),
  };

  // Theme switching functions
  function updateImages(theme) {
    elements.header.style.backgroundImage = `url("${themeConfig[theme].headerBg}")`;
    elements.githubImage.src = themeConfig[theme].github;
    elements.linkedinImage.src = themeConfig[theme].linkedin;
    elements.emailImage.src = themeConfig[theme].email;
    elements.resumeImage.src = themeConfig[theme].resume;
    elements.heroImage.src = themeConfig[theme].hero;
    elements.introImage.src = themeConfig[theme].intro;
    elements.toolboxImage.src = themeConfig[theme].toolbox;
    elements.workImage.src = themeConfig[theme].work;
  }

  function toggleTheme() {
    const newTheme = elements.body.classList.contains('light-theme')
      ? 'dark'
      : 'light';
    elements.body.classList.toggle('light-theme');
    elements.body.classList.toggle('dark-theme');
    updateImages(newTheme);
    localStorage.setItem('theme', newTheme);
    elements.themeToggle.setAttribute(
      'aria-label',
      `Switch to ${newTheme === 'light' ? 'dark' : 'light'} theme`
    );
  }

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

  // Menu toggle function
  function toggleMenu() {
    console.log('toggleMenu function called');
    const isExpanded = elements.navMenu.classList.toggle('active-menu');
    elements.hamburgerButton.setAttribute('aria-expanded', isExpanded);
    elements.hamburgerButton
      .querySelector('.hamburger-icon')
      .classList.toggle('active-icon');
    console.log('Menu toggled, isExpanded:', isExpanded);
  }

  const hamburgerButton = document.getElementById('hamburger-button');
  console.log('Hamburger button element:', hamburgerButton);

  if (hamburgerButton) {
    console.log('Hamburger button found');

    // Add click event listener
    hamburgerButton.addEventListener('click', function (event) {
      console.log('Hamburger button clicked', event);
      alert('Hamburger button clicked');
    });

    // Add additional event listeners to check if any events are firing
    hamburgerButton.addEventListener('mousedown', function (event) {
      console.log('Mousedown on hamburger button', event);
    });

    hamburgerButton.addEventListener('mouseup', function (event) {
      console.log('Mouseup on hamburger button', event);
    });

    // Log button properties
    console.log('Button properties:', {
      width: hamburgerButton.offsetWidth,
      height: hamburgerButton.offsetHeight,
      visible: hamburgerButton.offsetParent !== null,
      disabled: hamburgerButton.disabled,
    });
  } else {
    console.error('Hamburger button not found');
  }

  // Add a global click listener to see if clicks are being captured
  document.addEventListener('click', function (event) {
    console.log('Click detected on document', event.target);
  });

  // Event listeners
  console.log('Hamburger button:', elements.hamburgerButton);
  elements.hamburgerButton.addEventListener('click', (e) => {
    console.log('Hamburger clicked');
    toggleMenu();
  });

  // Close menu when clicking on a nav link
  elements.navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (elements.navMenu.classList.contains('active-menu')) {
        toggleMenu();
      }
    });
  });

  // Slider functionality
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
        if (content) content.style.display = 'block';
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
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 4000);
  }

  // Keyboard navigation
  function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft') {
      prevSlide();
      startInterval();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
      startInterval();
    }
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
    slide.addEventListener('focus', () => {
      clearInterval(intervalId);
    });
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
