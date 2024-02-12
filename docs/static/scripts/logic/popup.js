export class Popup {
    constructor(data) {
        this.popup = document.querySelector(".popup")
        this.showPopup = document.querySelectorAll(".show-popup")
        this.hidePopup = document.querySelector(".hide-popup")
        this.popupTitle = document.querySelector(".popup-title")
        this.jsonData = data
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.showPopup.forEach((item, index) => {
            item.addEventListener("click", () => {
                this.fillPopup(index)
                this.togglePopup()
            })
        })
        this.hidePopup.addEventListener("click", () => this.togglePopup())
    }

    togglePopup = () => {
        this.popup.classList.toggle("toggle-popup")
    }

    fillPopup = (index) => {
        this.popupTitle.textContent = this.jsonData.itineraries[index].itinerary
    }
}