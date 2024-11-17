
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

about.addEventListener("click", ()=>{

    const aboutBox = new WinBox({
        title: "About Me",
        width: "350px",
        height: "350px",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground("#00aa00")
        },
        onblur: function(){
            this.setBackground("#777")
        } 
    });
});

// WinBox del skills

skills.addEventListener("click", ()=>{

    const aboutBox = new WinBox({
        title: "skills",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: skillsContent,
        onfocus: function(){
            this.setBackground("#00aa00")
        },
        onblur: function(){
            this.setBackground("#777")
        } 
    });
});


// WinBox de educación


educacion.addEventListener("click", ()=>{

    const aboutBox = new WinBox({
        title: "education",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: educacionContent,
        onfocus: function(){
            this.setBackground("#00aa00")
        },
        onblur: function(){
            this.setBackground("#777")
        } 
    });
});


// WinBox de contacto


contacto.addEventListener("click", ()=>{

    const aboutBox = new WinBox({
        title: "contact",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: contactoContent,
        onfocus: function(){
            this.setBackground("#00aa00")
        },
        onblur: function(){
            this.setBackground("#777")
        } 
    });
});

