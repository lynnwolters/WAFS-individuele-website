import { FetchData } from "./logic/fetchData.js"
import { Popup } from "./logic/popup.js"
import { FilterButton } from "./logic/filterButton.js"
import { ToggleButton } from "./logic/toggleButton.js"
import { AddActivities } from "./logic/addActivities.js"

export class App {
    constructor() {
        this.init()
    }

    init = async () => {
        this.fetchData = new FetchData()
        await this.fetchData.init() 
        this.popup = new Popup(this.fetchData.jsonData)
        this.filterButton = new FilterButton()
        this.toggleButton = new ToggleButton()
        this.addActivities = new AddActivities(this.fetchData.jsonData)
    }
}
