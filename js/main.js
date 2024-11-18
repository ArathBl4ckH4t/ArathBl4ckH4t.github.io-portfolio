
// edit contain 1

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const contact = document.getElementById("contact");

// edit contain 2

const aboutContent = document.getElementById("about-content");
const skillsContent = document.getElementById("skills-content");
const educationContent = document.getElementById("education-content");
const contactContent = document.getElementById("contact-content");

// WinBox del about

function getRandomPosition() {
    const top = Math.floor(Math.random() * (window.innerHeight - 350)); // Altura del viewport
    const left = Math.floor(Math.random() * (window.innerWidth - 350)); // Ancho del viewport
    return { top, left };
}

about.addEventListener("click", () => {
    const { top, left } = getRandomPosition();
    const aboutBox = new WinBox({
        title: "About Me",
        width: "350px",
        height: "350px",
        top: top,
        left: left,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

skills.addEventListener("click", () => {
    const { top, left } = getRandomPosition();
    const skillsBox = new WinBox({
        title: "Skills",
        width: "350px",
        height: "350px",
        top: top,
        left: left,
        mount: skillsContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

education.addEventListener("click", () => {
    const { top, left } = getRandomPosition();
    const educationBox = new WinBox({
        title: "Education",
        width: "350px",
        height: "350px",
        top: top,
        left: left,
        mount: educationContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

contact.addEventListener("click", () => {
    const { top, left } = getRandomPosition();
    const contactBox = new WinBox({
        title: "Contact",
        width: "350px",
        height: "350px",
        top: top,
        left: left,
        mount: contactContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});


