export class ToggleButton {
    constructor() {
        this.toggleButtonContainer = document.querySelector(".toggle-button-container")
        this.toggleButtonSwitchContainer = document.querySelector(".toggle-button-switch-container")
        this.toggleButtonNumber = false; 
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.toggleButtonContainer.addEventListener("click", this.toggleButton)
    }

    toggleButton = () => {
        this.toggleButtonNumber = !this.toggleButtonNumber
        if (this.toggleButtonNumber) {
            this.toggleButtonSwitchContainer.style.clipPath = 'inset(0 0 0 50%)'
        } else {
            this.toggleButtonSwitchContainer.style.clipPath = 'inset(0 50% 0 0)'
        }
    }       
}
