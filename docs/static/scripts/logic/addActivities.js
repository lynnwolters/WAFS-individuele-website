export class AddActivities {
    constructor(jsonData) {
        this.activitiesContainer = document.querySelector(".activities")
        this.loadMoreButton = document.querySelector(".load-more-button")
        this.jsonData = jsonData
        this.activitiesPerPage = 4
        this.activitiesDisplayed = 0
        this.init()
    }

    init = () => {
        this.bindEvents()
        this.displayActivities()
    }

    bindEvents = () => {
        this.loadMoreButton.addEventListener("click", this.loadMoreActivities)
    }

    displayActivities = () => {
        const itinerariesData = this.jsonData.itineraries
        const remainingActivities = itinerariesData.reduce((acc, itinerary) => {
            return acc + itinerary.stops.reduce((acc, stop) => {
                return acc + stop.activities.length
            }, 0)
        }, 0) - this.activitiesDisplayed

        const activitiesToDisplay = Math.min(this.activitiesPerPage, remainingActivities)

        for (let i = 0; i < activitiesToDisplay; i++) {
            const activityIndex = this.activitiesDisplayed + i
            const activity = this.getActivityByIndex(activityIndex, itinerariesData)
            
            const activityItem = document.createElement("li")
            const activityButton = document.createElement("button")
            const activityTitle = document.createElement("h3")
            const activityImage = document.createElement("img")

            activityItem.classList.add("activity")
            activityButton.classList.add("activity-button")

            this.activitiesContainer.appendChild(activityItem)
            activityItem.appendChild(activityButton)
            activityButton.appendChild(activityTitle)
            activityButton.appendChild(activityImage)

            activityTitle.textContent = activity.activity
            activityImage.src = activity.imgUrl
        }

        this.activitiesDisplayed += activitiesToDisplay

        if (this.activitiesDisplayed >= remainingActivities) {
            this.loadMoreButton.style.display = "none"
        }
    }

    getActivityByIndex = (index, itinerariesData) => {
        let count = 0
        for (const itinerary of itinerariesData) {
            for (const stop of itinerary.stops) {
                for (const activity of stop.activities) {
                    if (count === index) {
                        return activity
                    }
                    count++
                }
            }
        }
        return null
    }

    loadMoreActivities = () => {
        this.displayActivities()
    }
}