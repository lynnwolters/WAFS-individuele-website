import { FetchJsonData } from "./logic/fetchJsonData.js" 
import { Popup } from "./logic/popup.js" 

export class App {
    constructor() {
        this.init()
    }

    init = () => {
        this.fetchJsonData = new FetchJsonData() 
        this.popup = new Popup() 
    }
}