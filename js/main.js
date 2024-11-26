
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

about.addEventListener("click", () => {
    // Crear la ventana inicial
    const aboutBox = new WinBox({
        title: "About Me",
        width: "270px",
        height: "200px",
        top: 10,
        right: "5%",
        bottom: 10,
        left: "5%",
        autosize: true,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        }
    });

    // Configurar las propiedades finales
    const targetStyles = {
        width: 1205,
        height: 216,
        left: 66,
        top: 10
    };

    // Variables iniciales
    let currentWidth = 270;
    let currentHeight = 200;
    let currentLeft = 50; 
    let currentTop = 10;
    const steps = 50; 
    let stepCount = 0;

    // Incrementos por paso
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;

    // Animar usando setInterval
    const interval = setInterval(() => {
        stepCount++;

        // Ajustar los valores en cada paso
        currentWidth += incrementWidth;
        currentHeight += incrementHeight;
        currentLeft += incrementLeft;
        currentTop += incrementTop;

        // Aplicar los valores a la ventana
        aboutBox.resize(currentWidth, currentHeight);
        aboutBox.move(currentLeft, currentTop);

        // Detener la animación cuando se llegue al paso final
        if (stepCount >= steps) {
            clearInterval(interval);

            // Asegurar los valores finales exactos
            aboutBox.resize(targetStyles.width, targetStyles.height);
            aboutBox.move(targetStyles.left, targetStyles.top);
        }
    }, 10); 
});



// WinBox del skills
skills.addEventListener("click", () => {
    // Crear la ventana inicial
    const aboutBox = new WinBox({
        title: "Skills",
        width: "270px",
        height: "300px",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: skillsContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        }
    });

    // Configurar las propiedades finales
    const targetStyles = {
        width: 295,
        height: 355,
        left: 976,
        top: 232,
    };

    // Variables iniciales
    let currentWidth = 270;
    let currentHeight = 300;
    let currentLeft = 50; 
    let currentTop = 50;
    const steps = 50; 
    let stepCount = 0;

    // Incrementos por paso
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;

    // Animar usando setInterval
    const interval = setInterval(() => {
        stepCount++;

        // Ajustar los valores en cada paso
        currentWidth += incrementWidth;
        currentHeight += incrementHeight;
        currentLeft += incrementLeft;
        currentTop += incrementTop;

        // Aplicar los valores a la ventana
        aboutBox.resize(currentWidth, currentHeight);
        aboutBox.move(currentLeft, currentTop);

        // Detener la animación cuando se llegue al paso final
        if (stepCount >= steps) {
            clearInterval(interval);

            // Asegurar los valores finales exactos
            aboutBox.resize(targetStyles.width, targetStyles.height);
            aboutBox.move(targetStyles.left, targetStyles.top);
        }
    }, 10); 
});





// WinBox de education

education.addEventListener("click", () => {
    // Crear la ventana inicial
    const educationBox = new WinBox({
        title: "Education",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: educationContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        }
    });

    // Configurar las propiedades finales
    const targetStyles = {
        width: 371,
        height: 349,
        left: 66,
        top: 238
    };

    // Variables iniciales
    let currentWidth = 270; 
    let currentHeight = 200; 
    let currentLeft = 50; 
    let currentTop = 50;
    const steps = 50; 
    let stepCount = 0;

    // Incrementos por paso
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;

    // Animar usando setInterval
    const interval = setInterval(() => {
        stepCount++;

        // Ajustar los valores en cada paso
        currentWidth += incrementWidth;
        currentHeight += incrementHeight;
        currentLeft += incrementLeft;
        currentTop += incrementTop;

        // Aplicar los valores a la ventana
        educationBox.resize(currentWidth, currentHeight);
        educationBox.move(currentLeft, currentTop);

        // Detener la animación cuando se llegue al paso final
        if (stepCount >= steps) {
            clearInterval(interval);

            // Asegurar los valores finales exactos
            educationBox.resize(targetStyles.width, targetStyles.height);
            educationBox.move(targetStyles.left, targetStyles.top);
        }
    }, 10); 
});

// WinBox de contact
contact.addEventListener("click", () => {
 
    const contactBox = new WinBox({
        title: "Contact",
        top: 50,
        right: "5%",
        bottom: 50,
        left: "5%",
        autosize: true,
        mount: contactContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        }
    });

    // Configurar las propiedades finales
    const targetStyles = {
        width: 339,
        height: 160,
        left: 529,
        top: 427
    };

    // Variables iniciales
    let currentWidth = 270; 
    let currentHeight = 200; 
    let currentLeft = 50; 
    let currentTop = 50;
    const steps = 50; 
    let stepCount = 0;

    // Incrementos por paso
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;

    // Animar usando setInterval
    const interval = setInterval(() => {
        stepCount++;

        // Ajustar los valores en cada paso
        currentWidth += incrementWidth;
        currentHeight += incrementHeight;
        currentLeft += incrementLeft;
        currentTop += incrementTop;

        // Aplicar los valores a la ventana
        contactBox.resize(currentWidth, currentHeight);
        contactBox.move(currentLeft, currentTop);

        // Detener la animación cuando se llegue al paso final
        if (stepCount >= steps) {
            clearInterval(interval);

            // Asegurar los valores finales exactos
            contactBox.resize(targetStyles.width, targetStyles.height);
            contactBox.move(targetStyles.left, targetStyles.top);
        }
    }, 10);
});


