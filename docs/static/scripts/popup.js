const popup = document.querySelector(".popup");
const showPopup = document.querySelectorAll(".show-popup");
const closePopup = document.querySelector(".close-popup");

showPopup.forEach(item => item.addEventListener("click", () => togglePopup()));
closePopup.addEventListener("click", () => togglePopup());

const togglePopup = () => {
    popup.classList.toggle("toggle-popup");
};
