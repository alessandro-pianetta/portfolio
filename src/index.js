import './index.css';
import './index.html';

// TO DO
// 1. Dark Mode toggle doesn't always fire on first click
// 2. Experience scroll animation doesn't always fire
// 3. Change about me light mode bg to accent?

// Dark/Light mode toggle
function switchTheme(e) {
  console.log(e);
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
const themeToggle = document.querySelector('.checkbox[type="checkbox"]');
themeToggle.addEventListener('change', switchTheme, false);

// Projects Section mouseover animations
function handleMouseEnter({ target }) {
  target.classList.add('hover');
}
const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
  project.addEventListener('mouseenter', handleMouseEnter);
});

// Experience Section scroll animations
function onChange([payload]) {
  if (payload && payload.isIntersecting) {
    const { target } = payload;
    if (!target.classList.contains('animated')) {
      target.classList.add('animated');
    }
  }
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};
const observer = new IntersectionObserver(onChange, options);
const expItems = document.querySelectorAll('.exp-item', options);
expItems.forEach((item) => observer.observe(item));
