class DogPicture extends HTMLElement {
    set src(value) {
        this.innerHTML = `<img src="${value}">`;
    }
}

customElements.define('dog-picture', DogPicture);