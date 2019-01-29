import fetchDogs from './fetch.js';
import './dogPicture.js';

window.addEventListener('load', () => {
    getData();
});

async function getData() {
    const srcs = await fetchDogs(10);
    const main = document.querySelector('main');

    srcs.forEach(src => {
        const el = document.createElement('dog-picture');
        el.src = src;
        main.appendChild(el);
    });
}

