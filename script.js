// Handle Popup
const popupBtn = document.getElementById("popup-btn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

popupBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Drag-and-Drop Functionality for Projects
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', card.dataset.link);
    });
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    const link = e.dataTransfer.getData('text');
    if (link) {
        window.open(link, '_blank');
    }
});
