
// Toggle Button:
function toggleButton() {
let x = document.querySelector('#readMore');
    if (x.textContent === "Read More") {
    x.textContent = "Read Less";
    } else {
    x.textContent = "Read More";
    }
}

// Gallery Image Overlay Toggle:
const overlay = document.querySelectorAll(".card-img-overlay");
for (let i = 0; i < overlay.length; i++) {
    overlay[i].addEventListener("click", function() {
    overlay[i].classList.toggle("hidden");
    });
}
