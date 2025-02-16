document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-button");
    const pages = document.querySelectorAll(".page");
    const backButton = document.getElementById("backButton");

    // تحميل المؤثرات الصوتية
    const flipSound = new Audio("flip.mp3");
    const backSound = new Audio("back.mp3");

    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = document.getElementById(button.dataset.target);
            if (targetPage) {
                flipSound.play();
                pages.forEach(page => page.classList.add("hidden"));
                targetPage.classList.remove("hidden");
                backButton.style.display = "block";
            }
        });
    });

    backButton.addEventListener("click", function () {
        backSound.play();
        pages.forEach(page => page.classList.add("hidden"));
        document.querySelector(".home-page").classList.remove("hidden");
        backButton.style.display = "none";
    });
});