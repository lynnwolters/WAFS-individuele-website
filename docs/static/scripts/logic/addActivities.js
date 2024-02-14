export class AddActivities {
    constructor(jsonData) {
        this.activities = document.querySelector(".activities")
        this.jsonData = jsonData
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.addActivities()
    }    

    addActivities = () => {
        const itinerariesData = this.jsonData.itineraries

        itinerariesData.forEach(itinerary => {
            itinerary.stops.forEach(stop => {
                stop.activities.forEach(activity => {
                    const activityItem = document.createElement("li")
                    const activityButton = document.createElement("button")
                    const activityTitle = document.createElement("h3")
                    const activityImage = document.createElement("img")

                    this.activities.appendChild(activityItem)
                    activityItem.appendChild(activityButton)
                    activityButton.appendChild(activityTitle)
                    activityButton.appendChild(activityImage)
                    
                    activityTitle.textContent = activity.activity
                    activityImage.src = activity.imgUrl
                })
            })
        })
    }
}