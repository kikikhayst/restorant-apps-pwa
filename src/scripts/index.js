import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#headerBurger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  jumbotron: document.querySelector('.jumbotron'),
  titleMain: document.querySelector('.titleMain'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
