const overlay = document.getElementById('overlay');
overlay.addEventListener("animationend", () => {
    overlay.classList.add('hidden')
});