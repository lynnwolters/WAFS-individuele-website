export class Popup {
    constructor(jsonData) {
        this.popup = document.querySelector(".popup")
        this.showPopup = document.querySelectorAll(".show-popup")
        this.hidePopup = document.querySelector(".hide-popup")
        this.popupTitle = document.querySelector(".popup-title")
        this.popupStops = document.querySelector(".popup-stops")
        this.popupStop = document.querySelector(".popup-stop")
        this.popupStopName = document.querySelector(".popup-stop-name")
        this.jsonData = jsonData
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
        const itinerariesData = this.jsonData.itineraries[index]

        this.popupTitle.textContent = itinerariesData.itinerary

        this.popupStops.innerHTML = ""
        itinerariesData.stops.forEach(stop => {
            this.popupStop = document.createElement("li")
            this.popupStopName = document.createElement("p")
            this.popupStops.appendChild(this.popupStop)
            this.popupStop.appendChild(this.popupStopName)
            this.popupStopName.textContent = stop.stop
        })
    }    
}