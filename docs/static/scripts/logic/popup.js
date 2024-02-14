export class Popup {
    constructor(jsonData) {
        this.popup = document.querySelector(".popup")
        this.showPopup = document.querySelectorAll(".show-popup")
        this.hidePopup = document.querySelector(".hide-popup")
        this.popupTitle = document.querySelector(".popup-title")
        this.popupStops = document.querySelector(".popup-stops")
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
        const itinerariesData = this.jsonData.itineraries[index];
        
        this.popupTitle.textContent = itinerariesData.itinerary;
    
        this.popupStops.innerHTML = "";
        
        itinerariesData.stops.forEach(stop => {
            const popupStop = document.createElement("li")
            const popupStopTitle = document.createElement("h3")
            
            this.popupStops.appendChild(popupStop)
            popupStop.appendChild(popupStopTitle)
            popupStopTitle.textContent = stop.stop
    
            stop.activities.forEach(activity => {
                const popupStopActivity = document.createElement("div")
                const popupStopActivityTitle = document.createElement("h4")
                const popupStopActivityImage = document.createElement("img")
                const popupStopActivityDescription = document.createElement("p")

                popupStop.appendChild(popupStopActivity)
                popupStopActivity.appendChild(popupStopActivityTitle)
                popupStopActivity.appendChild(popupStopActivityImage)
                popupStopActivity.appendChild(popupStopActivityDescription)

                popupStopActivityTitle.textContent = activity.activity
                popupStopActivityImage.src = activity.imgUrl
                popupStopActivityDescription.textContent = activity.description
            })
        })
    }       
}