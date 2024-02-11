import { FetchJsonData } from "./logic/fetchJsonData.js" 
import { TogglePopup } from "./logic/popup.js" 

export class App {
    constructor() {
        this.init()
    }

    init = () => {
        this.fetchJsonData = new FetchJsonData() 
        this.togglePopup = new TogglePopup() 
    }
}