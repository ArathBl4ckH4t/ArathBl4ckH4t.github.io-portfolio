
// edit contain 1

const about = document.getElementById("about");
const habilidades = document.getElementById("habilidades");
const educacion = document.getElementById("educacion");
const contacto = document.getElementById("contacto");

// edit contain 2

const aboutContent = document.getElementById("about-content");
const habilidadesContent = document.getElementById("habilidades-content");
const educacionContent = document.getElementById("educacion-content");
const contactoContent = document.getElementById("contacto-content");

// WinBox del about

about.addEventListener("click", ()=>{

    const aboutBox = new WinBox({
        title: "acerca de mí",
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

// WinBox del habilidades

habilidades.addEventListener("click", ()=>{

    const aboutBox = new WinBox({
        title: "habilidades",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: habilidadesContent,
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
        title: "educación",
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
        title: "contacto",
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

