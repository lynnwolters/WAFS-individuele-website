import { TogglePopup } from "./logic/popup.js" 

export class App {
    constructor() {
        this.init()
    }

    init = () => {
        this.togglePopup = new TogglePopup() 
    }
}