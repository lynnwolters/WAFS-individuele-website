export class FilterButton {
    constructor() {
        this.filterButton = document.querySelector(".filter-button")
        this.filter = document.querySelector(".filter")
        this.filterItem = document.querySelectorAll(".filter-item")
        this.filterItemButton = document.querySelectorAll(".filter-item-button")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.filterButton.addEventListener("click", () => this.toggleFilterButton())
        this.filterItem.forEach(item => {
            item.addEventListener("click", () => this.toggleFilterItem(item))
        })
    }

    toggleFilterButton = () => {
        this.filter.classList.toggle("toggle-filter")
    }

    toggleFilterItem = (item) => {
        const button = item.querySelector(".filter-item-button")
        button.classList.toggle("toggle-filter-label")
    }
}
