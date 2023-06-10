import './style.scss';
import img from './img/logo.png';
import getBooks from './modules/view.js';

getBooks();

// add the logo to the navbar
const logo = document.createElement('img');
logo.src = img;
logo.alt = 'logo';
logo.classList.add('logoimg');
document.querySelector('.logo').appendChild(logo);
