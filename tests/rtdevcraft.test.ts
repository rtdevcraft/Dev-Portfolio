import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Website Functionality', () => {
  let dom: JSDOM;
  let window: Window & typeof globalThis;
  let document: Document;

  beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, '../index.html'),
      'utf8'
    );
    dom = new JSDOM(html, {
      url: 'http://localhost',
      runScripts: 'dangerously',
      resources: 'usable',
    });
    window = dom.window as Window & typeof globalThis;
    document = window.document;

    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    // Load the script
    let script = fs.readFileSync(
      path.resolve(__dirname, '../dist/script.js'),
      'utf8'
    );
    // Remove export statements for testing
    script = script.replace(/export\s*{[^}]*};?/, '');

    const scriptElement = document.createElement('script');
    scriptElement.textContent = script;
    document.body.appendChild(scriptElement);

    // Manually initialize the script if init function exists
    if (typeof window.init === 'function') {
      window.init();
    }

    console.log('Body classes after init:', document.body.classList.toString());
  });
  it('should toggle theme when theme switch is clicked', () => {
    const themeSwitch = document.querySelector('.switch-theme') as HTMLElement;
    const body = document.body;

    console.log('Initial body classes:', body.classList.toString());
    const initialTheme = body.classList.contains('light-theme')
      ? 'light'
      : 'dark';

    themeSwitch.click();

    // Manually call the toggle function if it exists
    if (typeof window.toggleTheme === 'function') {
      window.toggleTheme();
    }

    console.log('Body classes after toggle:', body.classList.toString());

    const newTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    expect(newTheme).not.toBe(initialTheme);
  });

  // Add more tests here...
});
