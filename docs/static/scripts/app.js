import { FetchData } from "./logic/fetchData.js"
import { Popup } from "./logic/popup.js"
import { FilterButton} from "./logic/filterButton.js"

export class App {
    constructor() {
        this.init()
    }

    init = async () => {
        this.fetchData = new FetchData()
        await this.fetchData.init() 
        this.popup = new Popup(this.fetchData.jsonData)
        this.filterButton = new FilterButton()
    }
}
