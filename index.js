document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector('#skills');
    skillsSection.addEventListener("mouseover", () => {
        skillsSection.style.color = "#ff00ff";
        setTimeout(() => {
            skillsSection.style.color = "#00ffcc";
        }, 500);
    });
});
