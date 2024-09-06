export {};

// Header backgrounds
import headerBgLight from './assets/images/header-bg-light.webp';
import headerBgDark from './assets/images/header-bg.webp';

// Hero images
import spotLightSm from './assets/images/spot-light-sm.webp';
import spotLightLg from './assets/images/spot-light-lg.webp';
import spotDarkSm from './assets/images/spot-dark-sm.webp';
import spotDarkLg from './assets/images/spot-dark-lg.webp';

// Social icons
import githubLight from './assets/images/github.png';
import githubDark from './assets/images/github-dark.png';
import linkedinLight from './assets/images/linkedin.png';
import linkedinDark from './assets/images/linkedin-dark.png';
import emailLight from './assets/images/email.png';
import emailDark from './assets/images/email-dark.png';
import resumeLight from './assets/images/resume.png';
import resumeDark from './assets/images/resume-dark.png';

// Section images
import introLight from './assets/images/heylo.jpg';
import introDark from './assets/images/heylo-dark.jpg';
import toolboxLight from './assets/images/toolbox.jpg';
import toolboxDark from './assets/images/toolbox-dark.jpg';
import workLight from './assets/images/work.jpg';
import workDark from './assets/images/work-dark.jpg';
import emailMeLight from './assets/images/email-me.jpg';
import emailMeDark from './assets/images/email-me-dark.jpg';

// Copy email icon
import copyEmailLight from './assets/images/copy-email.png';
import copyEmailDark from './assets/images/copy-email-dark.png';

// Logo images
import reactRouterLogo from './assets/images/ReactRouterlogo.png';
import reactRouterLogoDark from './assets/images/ReactRouterlogo-w.png';
import githubLogo from './assets/images/Githublogo.png';
import githubLogoDark from './assets/images/Githublogo-w.png';

// About page images
import rtLight from './assets/images/rt.png';
import rtDark from './assets/images/rt-dark.png';
import moreAboutLight from './assets/images/more-about.jpg';
import moreAboutDark from './assets/images/more-about-dark.jpg';
import interestsLight from './assets/images/interests.jpg';
import interestsDark from './assets/images/interests-dark.jpg';
import recsLight from './assets/images/recs.jpg';
import recsDark from './assets/images/recs-dark.jpg';
import certsLight from './assets/images/certs.jpg';
import certsDark from './assets/images/certs-dark.jpg';

// Toolbox images
import htmlLogo from './assets/images/HTMLlogo.png';
import cssLogo from './assets/images/CSSlogo.png';
import jsLogo from './assets/images/JSlogo.png';
import tsLogo from './assets/images/TSlogo.png';
import reactLogo from './assets/images/Reactlogo.png';
import tailwindLogo from './assets/images/Tailwindlogo.png';
import bootstrapLogo from './assets/images/Bootstraplogo.png';
import adobeCCLogo from './assets/images/CClogo.png';
import figmaLogo from './assets/images/Figmalogo.png';
import canvaLogo from './assets/images/Canvalogo.png';
import gsapLogo from './assets/images/GSlogo.png';
import firebaseLogo from './assets/images/Firebaselogo.png';
import viteLogo from './assets/images/Vitelogo.png';
import nodeLogo from './assets/images/Nodelogo.png';
import mongoDBLogo from './assets/images/MongoDBlogo.png';
import postmanLogo from './assets/images/Postmanlogo.png';
import noSQLLogo from './assets/images/NoSQLlogo.png';
import expressLogo from './assets/images/Expresslogo.png';
import netlifyLogo from './assets/images/Netlifylogo.png';
import wordpressLogo from './assets/images/Wordpresslogo.png';
import npmLogo from './assets/images/npmlogo.png';
import chatGPTLogo from './assets/images/ChatGPTlogo.png';
import claudeAILogo from './assets/images/ClaudeAI.png';

// Slides
import linkIcon from './assets/images/link-icon.jpg';
import githubIcon from './assets/images/github.png';
import slide1 from './assets/images/slide1.jpg';
import slide2 from './assets/images/slide2.jpg';
import slide3 from './assets/images/slide3.jpg';
import slide4 from './assets/images/slide4.jpg';

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
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  reactRouterLogoImages: HTMLImageElement;
  githubLogoImages: HTMLImageElement;
  rtImage: HTMLImageElement;
  moreAboutImage: HTMLImageElement;
  interestsImage: HTMLImageElement;
  recsImage: HTMLImageElement;
  certsImage: HTMLImageElement;
}

interface ToolboxItem {
  name: string;
  image: string;
  darkImage?: string;
  alt: string;
}

interface ImageMapping {
  element: HTMLElement | HTMLImageElement | NodeListOf<HTMLImageElement>;
  prop: 'backgroundImage' | 'src';
  value: string;
}

interface SlideData {
  backgroundUrl: string;
  icons: { src: string; alt: string }[];
  title: string;
  description: string;
  technologiesUsed?: string;
  liveLink?: string;
  githubLink?: string;
}

// Theme configuration
const themeConfig: ThemeConfigs = {
  light: {
    headerBg: headerBgLight,
    hero: {
      small: spotLightSm,
      large: spotLightLg,
    },
    github: githubLight,
    linkedin: linkedinLight,
    email: emailLight,
    resume: resumeLight,
    intro: introLight,
    toolbox: toolboxLight,
    work: workLight,
    emailMe: emailMeLight,
    copyEmailIcon: copyEmailLight,
    reactRouterLogoImages: reactRouterLogo,
    githubLogoImages: githubLogo,
    rtImage: rtLight,
    moreAbout: moreAboutLight,
    interests: interestsLight,
    recs: recsLight,
    certs: certsLight,
  },
  dark: {
    headerBg: headerBgDark,
    hero: {
      small: spotDarkSm,
      large: spotDarkLg,
    },
    github: githubDark,
    linkedin: linkedinDark,
    email: emailDark,
    resume: resumeDark,
    intro: introDark,
    toolbox: toolboxDark,
    work: workDark,
    emailMe: emailMeDark,
    copyEmailIcon: copyEmailDark,
    reactRouterLogoImages: reactRouterLogoDark,
    githubLogoImages: githubLogoDark,
    rtImage: rtDark,
    moreAbout: moreAboutDark,
    interests: interestsDark,
    recs: recsDark,
    certs: certsDark,
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
  nextButton: document.querySelector('.nav-arrow.next') as HTMLButtonElement,
  prevButton: document.querySelector('.nav-arrow.prev') as HTMLButtonElement,
  reactRouterLogoImages: document.querySelector(
    '#toolbox .marquee__group img[src="./assets/images/ReactRouterlogo.png"]'
  ) as HTMLImageElement,
  githubLogoImages: document.querySelector(
    '#toolbox .marquee__group img[src="./assets/images/Githublogo.png"]'
  ) as HTMLImageElement,
  rtImage: document.querySelector(
    '.about__hero-container .me-image'
  ) as HTMLImageElement,
  moreAboutImage: document.querySelector(
    '.about__more-about-me img[src="./assets/images/more-about.jpg"]'
  ) as HTMLImageElement,
  interestsImage: document.querySelector(
    '.about__interests img[src="./assets/images/interests.jpg"]'
  ) as HTMLImageElement,
  recsImage: document.querySelector(
    '.about__recs img[src="./assets/images/recs.jpg"]'
  ) as HTMLImageElement,
  certsImage: document.querySelector(
    '.about__certs img[src="./assets/images/certs.jpg"]'
  ) as HTMLImageElement,
});

const toolboxItems: ToolboxItem[] = [
  { name: 'HTML', image: htmlLogo, alt: 'HTML logo' },
  { name: 'CSS', image: cssLogo, alt: 'CSS logo' },
  { name: 'Javascript', image: jsLogo, alt: 'Javascript logo' },
  { name: 'Typescript', image: tsLogo, alt: 'Typescript logo' },
  { name: 'React', image: reactLogo, alt: 'React logo' },
  { name: 'Tailwind CSS', image: tailwindLogo, alt: 'Tailwind CSS' },
  { name: 'Bootstrap', image: bootstrapLogo, alt: 'Bootstrap logo' },
  {
    name: 'React Router',
    image: reactRouterLogo,
    darkImage: reactRouterLogoDark,
    alt: 'React Router logo',
  },
  { name: 'Adobe CC', image: adobeCCLogo, alt: 'Adobe Creative Cloud logo' },
  { name: 'Figma', image: figmaLogo, alt: 'Figma logo' },
  { name: 'Canva', image: canvaLogo, alt: 'Canva logo' },
  { name: 'GreenSock', image: gsapLogo, alt: 'GreenSock logo' },
  { name: 'Firebase', image: firebaseLogo, alt: 'Firebase logo' },
  { name: 'Vite', image: viteLogo, alt: 'Vite logo' },
  { name: 'Node.js', image: nodeLogo, alt: 'Node.js logo' },
  { name: 'MongoDB Atlas', image: mongoDBLogo, alt: 'MongoDB Atlas logo' },
  { name: 'Postman', image: postmanLogo, alt: 'Postman logo' },
  { name: 'NoSQL', image: noSQLLogo, alt: 'NoSQL logo' },
  { name: 'Express', image: expressLogo, alt: 'Express logo' },
  {
    name: 'Github',
    image: githubLogo,
    darkImage: githubLogoDark,
    alt: 'Github logo',
  },
  { name: 'Netlify', image: netlifyLogo, alt: 'Netlify logo' },
  { name: 'Wordpress', image: wordpressLogo, alt: 'Wordpress logo' },
  { name: 'npm', image: npmLogo, alt: 'npm logo' },
  { name: 'ChatGPT', image: chatGPTLogo, alt: 'ChatGPT logo' },
  { name: 'ClaudeAI', image: claudeAILogo, alt: 'ClaudeAI logo' },
];

function createToolboxItems(isDarkTheme: boolean): string {
  const itemsHTML = toolboxItems
    .map(
      (item: ToolboxItem) => `
      <li>
        <img 
          src="${isDarkTheme && item.darkImage ? item.darkImage : item.image}" 
          alt="${item.alt}"
          data-light-src="${item.image}"
          ${item.darkImage ? `data-dark-src="${item.darkImage}"` : ''}
        />
        <h3>${item.name}</h3>
      </li>
    `
    )
    .join('');

  return `<ul>${itemsHTML}</ul>`;
}

function populateToolbox(): void {
  const marqueeGroups: NodeListOf<Element> =
    document.querySelectorAll('.marquee__group');
  const isDarkTheme = document.body.classList.contains('dark-theme');
  const toolboxContent: string = createToolboxItems(isDarkTheme);

  marqueeGroups.forEach((group: Element) => {
    if (group instanceof HTMLElement) {
      group.innerHTML = toolboxContent;
    }
  });
}

function updateToolboxImages(isDarkTheme: boolean): void {
  const toolboxImages = document.querySelectorAll(
    '.marquee__group img'
  ) as NodeListOf<HTMLImageElement>;
  toolboxImages.forEach((img) => {
    const lightSrc = img.dataset.lightSrc;
    const darkSrc = img.dataset.darkSrc;
    if (isDarkTheme && darkSrc) {
      img.src = darkSrc;
    } else if (lightSrc) {
      img.src = lightSrc;
    }
  });
}

// Call this function when the theme changes
function handleThemeChange(): void {
  const isDarkTheme = document.body.classList.contains('dark-theme');
  updateToolboxImages(isDarkTheme);
}

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

  const imageMappings: ImageMapping[] = [
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
      element: elements.githubLogoImages,
      prop: 'src',
      value: config.githubLogoImages,
    },
    {
      element: elements.reactRouterLogoImages,
      prop: 'src',
      value: config.reactRouterLogoImages,
    },
    { element: elements.rtImage, prop: 'src', value: config.rtImage },
    { element: elements.moreAboutImage, prop: 'src', value: config.moreAbout },
    { element: elements.interestsImage, prop: 'src', value: config.interests },
    { element: elements.recsImage, prop: 'src', value: config.recs },
    { element: elements.certsImage, prop: 'src', value: config.certs },
  ];

  imageMappings.forEach(({ element, prop, value }) => {
    if (element instanceof HTMLElement && prop === 'backgroundImage') {
      element.style.backgroundImage = value;
    } else if (element instanceof HTMLImageElement && prop === 'src') {
      element.src = value;
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

  handleThemeChange();

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
const slideData: SlideData[] = [
  {
    backgroundUrl: slide1,
    icons: [
      { src: htmlLogo, alt: 'HTML logo' },
      { src: cssLogo, alt: 'CSS logo' },
      { src: jsLogo, alt: 'JavaScript logo' },
      { src: tsLogo, alt: 'TypeScript logo' },
      { src: reactLogo, alt: 'React logo' },
      { src: tailwindLogo, alt: 'Tailwind CSS logo' },
      { src: reactRouterLogo, alt: 'React Router logo' },
      { src: viteLogo, alt: 'Vite logo' },
      { src: nodeLogo, alt: 'Node.js logo' },
      { src: npmLogo, alt: 'NPM logo' },
      { src: adobeCCLogo, alt: 'Adobe Creative Cloud logo' },
    ],
    title: 'Mobile-first E-commerce Website/SPA',
    description:
      'This was a guru-level challenge from Frontend Mentor. Lighthouse report is 100% in every category, which include performance, accessibility, best practices, and SEO.',
    technologiesUsed: 'Built with Typescript, React, Vite',
    liveLink: 'https://audiophile.rtdevcraft.com/',
    githubLink: 'https://github.com/rtdevcraft/Audiophile',
  },
  {
    backgroundUrl: slide2,
    icons: [
      { src: htmlLogo, alt: 'HTML logo' },
      { src: cssLogo, alt: 'CSS logo' },
      { src: jsLogo, alt: 'JavaScript logo' },
      { src: tsLogo, alt: 'TypeScript logo' },
      { src: reactLogo, alt: 'React logo' },
      { src: tailwindLogo, alt: 'Tailwind CSS logo' },
      { src: reactRouterLogo, alt: 'React Router logo' },
      { src: viteLogo, alt: 'Vite logo' },
      { src: nodeLogo, alt: 'Node.js logo' },
      { src: npmLogo, alt: 'NPM logo' },
      { src: adobeCCLogo, alt: 'Adobe Creative Cloud logo' },
    ],
    title: 'Responsive Rock Paper Scissors Game',
    description:
      'This was an advanced level challenge from Frontend Mentor. Lighthouse report is 100% in every category, which include performance, accessibility, best practices, and SEO.',
    technologiesUsed: 'Built with Typescript, React, Vite',
    liveLink: 'https://rpsls.rtdevcraft.com/',
    githubLink:
      'https://github.com/rtdevcraft/Rock-Paper-Scissors-Lizard-Spock',
  },
  {
    backgroundUrl: slide3,
    icons: [
      { src: htmlLogo, alt: 'HTML logo' },
      { src: cssLogo, alt: 'CSS logo' },
      { src: jsLogo, alt: 'JavaScript logo' },
      { src: adobeCCLogo, alt: 'Adobe Creative Cloud logo' },
    ],
    title: 'Responsive Design Portfolio Website',
    description:
      'This was the website I designed and developed for my UX/UI/web/graphic design work.',
    technologiesUsed: 'Built with HTML, CSS, and JavaScript',
    liveLink: 'https://raedesign.org/',
    githubLink: 'https://github.com/rtdevcraft/portfolio-24',
  },
  {
    backgroundUrl: slide4,
    icons: [
      { src: htmlLogo, alt: 'HTML logo' },
      { src: cssLogo, alt: 'CSS logo' },
      { src: jsLogo, alt: 'JavaScript logo' },
      { src: tsLogo, alt: 'TypeScript logo' },
      { src: reactLogo, alt: 'React logo' },
      { src: tailwindLogo, alt: 'Tailwind CSS logo' },
      { src: reactRouterLogo, alt: 'React Router logo' },
      { src: viteLogo, alt: 'Vite logo' },
      { src: nodeLogo, alt: 'Node.js logo' },
      { src: npmLogo, alt: 'NPM logo' },
      { src: adobeCCLogo, alt: 'Adobe Creative Cloud logo' },
    ],
    title: 'Fitness Tracking App',
    description:
      'In Progress- Tackling the challenge of redesigning and building a fitness tracker app that is suited to my specific needs',
    technologiesUsed: 'Building with Typescript, React, Vite',
    // Note: No liveLink or githubLink for this project as it's in progress
  },
];

const createSlideElement = (
  data: SlideData,
  index: number,
  totalSlides: number
): HTMLElement => {
  const slide = document.createElement('div');
  const isLastSlide = index === totalSlides - 1;
  slide.className = `slide ${index === 0 ? 'active' : ''} ${isLastSlide ? 'last-slide' : ''}`;
  slide.style.backgroundImage = `url('${data.backgroundUrl}')`;

  slide.innerHTML = `
    <div class="slide__content">
      <div class="slide__icons">
        ${data.icons.map((icon) => `<img src="${icon.src}" alt="${icon.alt}" />`).join('')}
      </div>
      ${
        data.liveLink || data.githubLink
          ? `
        <div class="slide__links">
          ${
            data.liveLink
              ? `
            <div class="slide__link">
              <a href="${data.liveLink}" target="_blank" aria-label="View live project">
                <img src="${linkIcon}" alt="Icon of a cloud and arrow" />
              </a>
            </div>
          `
              : ''
          }
          ${
            data.githubLink
              ? `
            <div class="slide__link">
              <a href="${data.githubLink}" target="_blank" aria-label="View project on GitHub">
                <img src="${githubIcon}" alt="Github logo" />
              </a>
            </div>
          `
              : ''
          }
        </div>
      `
          : ''
      }
      <div class="slide__desc">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        ${data.technologiesUsed ? `<p>${data.technologiesUsed}</p>` : ''}
      </div>
    </div>
  `;

  return slide;
};

const createSlider = (slides: NodeListOf<HTMLElement>) => {
  let currentIndex = 0;

  const showSlide = (index: number): void => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.classList.toggle('nonActive', i !== index);
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });

    const slideAnnouncement = document.getElementById('slide-announcement');
    if (slideAnnouncement) {
      slideAnnouncement.textContent = `Showing slide ${index + 1} of ${slides.length}`;
    }
  };

  const nextSlide = (): void => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const prevSlide = (): void => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
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
  const sliderElement = document.querySelector('.slider') as HTMLElement;

  if (sliderElement && slideData.length > 0) {
    // Generate slides
    slideData.forEach((data, index) => {
      const slide = createSlideElement(data, index, slideData.length);
      sliderElement.appendChild(slide);
    });

    // Select the newly created slides
    const slides = sliderElement.querySelectorAll(
      '.slide'
    ) as NodeListOf<HTMLElement>;

    const { showSlide, nextSlide, prevSlide, handleKeyboardNavigation } =
      createSlider(slides);

    showSlide(0); // Show the first slide initially

    if (elements.nextButton) {
      elements.nextButton.addEventListener('click', nextSlide);
    } else {
      console.warn('Next button not found');
    }

    if (elements.prevButton) {
      elements.prevButton.addEventListener('click', prevSlide);
    } else {
      console.warn('Previous button not found');
    }

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('keydown', (event: Event) => {
        handleKeyboardNavigation(event as KeyboardEvent);
      });
    } else {
      console.warn('Slider container not found');
    }
  } else {
    console.warn('Slider element or slide data not found');
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

  populateToolbox();

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
