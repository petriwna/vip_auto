export class Main {
    constructor() {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.menuBtnOpen = document.querySelector('.menu-btn-open');
        this.menuBtnClose = document.querySelector('.menu-btn-close');
        this.form = document.querySelector('#get-form');

        this.addEventListeners();
    }

    addEventListeners() {
        this.menuBtnOpen.addEventListener('click', this.handleMenuButton.bind(this));
        this.menuBtnClose.addEventListener('click', this.handleMenuButton.bind(this));
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }


    handleMenuButton() {
        this.toggleMenu();
        this.disableScroll();
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('is-open');
    }

    disableScroll() {
        document.body.classList.toggle('is-scroll-disable');
    }

    handleFormSubmit(event) {
        event.preventDefault();

        window.location.href = 'thank-you.html';
    }
}
