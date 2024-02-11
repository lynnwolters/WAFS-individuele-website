export class FetchJsonData {
    constructor() {
        this.jsonData
        this.init()
    }

    init = () => {
        this.fetchJsonData()
    }

    fetchJsonData = async () => {
        const response = await fetch("./static/data/data.json")
        this.jsonData = await response.json()
        console.log(this.jsonData)
    }
}
