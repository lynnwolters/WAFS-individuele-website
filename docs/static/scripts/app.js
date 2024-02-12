import { FetchData } from "./logic/fetchData.js"
import { Popup } from "./logic/popup.js"

export class App {
    constructor() {
        this.init()
    }

    init = async () => {
        this.fetchData = new FetchData()
        await this.fetchData.init() 
        this.popup = new Popup(this.fetchData.jsonData)
    }
}
