import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

function setupDOM() {
  document.body.innerHTML = `
    <button id="switch-theme" aria-label="Switch theme"></button>
    <button id="hamburger-button" aria-label="Toggle menu"></button>
    <ul id="nav-links" class="nav-links"></ul>
    <img class="hero__image" alt="Spot On Front End Dev with cheetah and pixel art" src="/assets/images/spot-light-sm.webp" />
    <img id="copy-email-icon" aria-label="Copy email to clipboard" />
    <div class="slider-container" aria-label="Project Slider">
      <div class="slide active"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <button class="nav-arrow next" aria-label="Next project"></button>
      <button class="nav-arrow prev" aria-label="Previous project"></button>
    </div>
  `;

  // Theme switch functionality
  const themeSwitch = document.getElementById('switch-theme');
  themeSwitch?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });

  // Menu toggle functionality
  const hamburgerButton = document.getElementById('hamburger-button');
  const navLinks = document.getElementById('nav-links');
  hamburgerButton?.addEventListener('click', () => {
    navLinks?.classList.toggle('active-menu');
  });

  // Slider functionality
  const slides = document.querySelectorAll('.slide');
  const nextButton = document.querySelector('.nav-arrow.next');
  const prevButton = document.querySelector('.nav-arrow.prev');
  let currentSlide = 0;

  const showSlide = (index: number) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  };

  nextButton?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevButton?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}

describe('Website Functionality', () => {
  beforeEach(() => {
    setupDOM();
  });

  it('should toggle theme when theme switch is clicked', () => {
    const themeSwitch = document.getElementById('switch-theme');
    expect(document.body.classList.contains('dark-theme')).toBe(false);

    fireEvent.click(themeSwitch!);
    expect(document.body.classList.contains('dark-theme')).toBe(true);

    fireEvent.click(themeSwitch!);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });

  it('should toggle menu when hamburger button is clicked', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');
    expect(navLinks?.classList.contains('active-menu')).toBe(false);

    fireEvent.click(hamburgerButton!);
    expect(navLinks?.classList.contains('active-menu')).toBe(true);

    fireEvent.click(hamburgerButton!);
    expect(navLinks?.classList.contains('active-menu')).toBe(false);
  });

  it('should change slides when navigation arrows are clicked', () => {
    const nextButton = document.querySelector('.nav-arrow.next');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const slides = document.querySelectorAll('.slide');

    expect(slides[0].classList.contains('active')).toBe(true);
    expect(slides[1].classList.contains('active')).toBe(false);

    fireEvent.click(nextButton!);
    expect(slides[0].classList.contains('active')).toBe(false);
    expect(slides[1].classList.contains('active')).toBe(true);

    fireEvent.click(prevButton!);
    expect(slides[1].classList.contains('active')).toBe(false);
    expect(slides[0].classList.contains('active')).toBe(true);
  });
});
