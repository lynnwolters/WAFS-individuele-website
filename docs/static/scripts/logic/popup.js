export class Popup {
    constructor() {
        this.popup = document.querySelector(".popup")
        this.showPopup = document.querySelectorAll(".show-popup")
        this.hidePopup = document.querySelector(".hide-popup")
        this.init()
    }

    init = () => {
        this.bindEvents()
        this.fillPopup()
    }

    bindEvents = () => {
        this.showPopup.forEach(item => item.addEventListener("click", () => this.togglePopup()))
        this.hidePopup.addEventListener("click", () => this.togglePopup())
    }

    togglePopup = () => {
        this.popup.classList.toggle("toggle-popup")
    }

    fillPopup = () => {
        
    }
}
