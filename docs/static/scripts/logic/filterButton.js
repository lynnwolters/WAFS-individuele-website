export class FilterButton {
    constructor() {
        this.filterButton = document.querySelector(".filter-button")
        this.filters = document.querySelector(".filters")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.filterButton.addEventListener("click", () => this.toggleFilterButton())
    }

    toggleFilterButton = () => {
        this.filters.classList.toggle("toggle-filter")
    }       
}