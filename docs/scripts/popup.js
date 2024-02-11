const showPopup = document.querySelectorAll(".show-popup");
const closePopup = document.querySelector(".close-popup");

showPopup.forEach(item => {
    item.addEventListener("click", togglePopup);
})
closePopup.addEventListener("click", togglePopup);

function togglePopup() {
    let popup = document.querySelector(".popup");
    popup.classList.toggle("toggle-popup");
};