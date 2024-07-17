document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('switch-theme');
  const hamburgerIcon = document.getElementById('hamburger-button');
  const body = document.body;
  const navLinks = document.getElementById('nav-links');
  const githubImage = document.getElementById('github');
  const linkedinImage = document.getElementById('linkedin');
  const emailImage = document.getElementById('email');
  const resumeImage = document.getElementById('resume');
  const heroImageLeft = document.getElementById('hero__image-left');
  const heroImageRight = document.getElementById('hero__image-right');
  const introImage = document.getElementById('intro__image');
  const toolboxImage = document.getElementById('toolbox__image');
  const workImage = document.getElementById('work__image');

  function updateImages() {
    if (body.classList.contains('dark-theme')) {
      githubImage.src = '/assets/images/github-dark.png';
      linkedinImage.src = '/assets/images/linkedin-dark.png';
      emailImage.src = '/assets/images/email-dark.png';
      resumeImage.src = '/assets/images/resume-dark.png';
      heroImageLeft.src = '/assets/images/hero-img-dark.png';
      heroImageRight.src = '/assets/images/frontend-dev-dark.png';
      introImage.src = '/assets/images/heylo-dark.png';
      toolboxImage.src = '/assets/images/toolbox-dark.png';
      workImage.src = '/assets/images/work-dark.png';
    } else {
      githubImage.src = '/assets/images/github.png';
      linkedinImage.src = '/assets/images/linkedin.png';
      emailImage.src = '/assets/images/email.png';
      resumeImage.src = '/assets/images/resume.png';
      heroImageLeft.src = '/assets/images/hero-img.png';
      heroImageRight.src = '/assets/images/frontend-dev.png';
      introImage.src = '/assets/images/heylo.png';
      toolboxImage.src = '/assets/images/toolbox.png';
      workImage.src = '/assets/images/work.png';
    }
  }

  function toggleMenu() {
    navLinks.classList.toggle('active-menu');
  }

  function enableDarkMode() {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
    updateImages();
  }

  function enableLightMode() {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    updateImages();
  }

  function setThemePreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }

  hamburgerIcon.addEventListener('click', function () {
    toggleMenu();
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('active-menu')) {
        toggleMenu();
      }
    });
  });

  themeToggle.addEventListener('click', () => {
    body.classList.contains('light-theme')
      ? enableDarkMode()
      : enableLightMode();
  });

  document.onload = setThemePreference();
});

// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.slide');
//   const prevButton = document.querySelector('.nav-arrow.prev');
//   const nextButton = document.querySelector('.nav-arrow.next');
//   let currentIndex = 0;
//   let intervalId;

//   const slideBackgrounds = [
//     { url: '/assets/images/slide1.jpg' },
//     { url: '/assets/images/slide2.jpg' },
//     { url: 'https://mcdn.wallpapersafari.com/medium/28/35/fslPOF.jpg' },
//     { url: 'https://mcdn.wallpapersafari.com/medium/18/88/gsAVlZ.jpg' },
//   ];

//   function showSlide(index) {
//     console.log('Showing slide', index);
//     slides.forEach((slide, i) => {
//       const content = slide.querySelector('.slide__content');
//       if (i === index) {
//         slide.classList.add('active');
//         slide.classList.remove('nonActive');
//         slide.style.backgroundImage = `url('${slideBackgrounds[i].url}')`;
//         if (content) {
//           content.style.display = 'block';
//         }
//       } else {
//         slide.classList.remove('active');
//         slide.classList.add('nonActive');
//         if (content) {
//           content.style.display = 'none';
//         }
//       }
//     });
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   function startInterval() {
//     clearInterval(intervalId);
//     intervalId = setInterval(nextSlide, 4000);
//   }

//   slides.forEach((slide, index) => {
//     slide.addEventListener('click', () => {
//       console.log('Slide clicked', index);
//       currentIndex = index;
//       showSlide(currentIndex);
//       startInterval();
//     });
//   });

//   // Navigation arrow event listeners
//   nextButton.addEventListener('click', () => {
//     nextSlide();
//     startInterval();
//   });

//   prevButton.addEventListener('click', () => {
//     prevSlide();
//     startInterval();
//   });

//   // Initialize background images
//   slides.forEach((slide, index) => {
//     slide.style.backgroundImage = `url('${slideBackgrounds[index].url}')`;
//   });

//   // Start the slideshow
//   console.log('Starting slideshow');
//   showSlide(currentIndex);
//   startInterval();
// });
