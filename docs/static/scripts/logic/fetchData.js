export class FetchData {
    constructor() {

    }

    init = async () => {
        try {
            const response = await fetch("./static/data/data.json")
            this.jsonData = await response.json()
            console.log("Fetched data succesfully from fetchData.js", this.jsonData)
        } catch (error) {
            console.error("Error fetching data from fetchData.js", error)
        }
    }
}