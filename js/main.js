// Elementos de control
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");
const cv = document.getElementById("cv");

// Contenido a montar
const aboutContent = document.getElementById("about-content");
const skillsContent = document.getElementById("skills-content");
const educationContent = document.getElementById("education-content");
const contactContent = document.getElementById("contact-content");
const projectsContent = document.getElementById("projects-content");
const cvContent = document.getElementById("cv-content");

// Arreglo global para guardar todas las ventanas abiertas
let openWinBoxes = [];


// Función para cerrar todas las ventanas abiertas
function closeAllWinBoxes() {
  openWinBoxes.forEach(winbox => winbox.close());
  openWinBoxes = [];
}


about.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isMobile = screenWidth <= 768; // Consideramos móvil si el ancho es menor a 768px
  
    // Medidas en PC (fijas)
    const pcTargetStyles = { width: 1518, height: 262, left: 143, top: 22 };
  
    // Medidas en Móvil (ajustadas dinámicamente)
    const mobileTargetStyles = {
      width: screenWidth * 0.9,
      height: screenHeight * 0.5,
      left: (screenWidth - screenWidth * 0.9) / 2,
      top: (screenHeight - screenHeight * 0.5) / 2,
    };
  
    // Determinar si usar las medidas de PC o de Móvil
    const targetStyles = isMobile ? mobileTargetStyles : pcTargetStyles;
  
    // Medidas iniciales (para la animación)
    let currentWidth = 270;
    let currentHeight = 200;
    let currentLeft = 50;
    let currentTop = 10;
  
    const steps = 50;
    let stepCount = 0;
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;
  
    const aboutBox = new WinBox({
      title: "About Me",
      width: `${currentWidth}px`,
      height: `${currentHeight}px`,
      top: `${currentTop}px`,
      left: `${currentLeft}px`,
      autosize: true,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      }
    });
  
    openWinBoxes.push(aboutBox);
  
    // Animación con requestAnimationFrame
    function animate() {
      if (stepCount >= steps) {
        aboutBox.resize(targetStyles.width, targetStyles.height);
        aboutBox.move(targetStyles.left, targetStyles.top);
        return;
      }
  
      stepCount++;
      aboutBox.resize(currentWidth + incrementWidth * stepCount, currentHeight + incrementHeight * stepCount);
      aboutBox.move(currentLeft + incrementLeft * stepCount, currentTop + incrementTop * stepCount);
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });
  
  

// ================= WinBox Skills =================
skills.addEventListener("click", () => {
    const skillsBox = new WinBox({
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
  
    openWinBoxes.push(skillsBox);
  
    // Animación con requestAnimationFrame
    const targetStyles = { width: 318, height: 453, left: 1391, top: 306 };
    let currentWidth = 270;
    let currentHeight = 300;
    let currentLeft = 50;
    let currentTop = 50;
    const steps = 50;
    let stepCount = 0;
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;
  
    function animate() {
      if (stepCount >= steps) {
        skillsBox.resize(targetStyles.width, targetStyles.height);
        skillsBox.move(targetStyles.left, targetStyles.top);
        return;
      }
  
      stepCount++;
      currentWidth += incrementWidth;
      currentHeight += incrementHeight;
      currentLeft += incrementLeft;
      currentTop += incrementTop;
  
      skillsBox.resize(currentWidth, currentHeight);
      skillsBox.move(currentLeft, currentTop);
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });
  


// ================= WinBox Education =================
education.addEventListener("click", () => {
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
  
    openWinBoxes.push(educationBox);
  
    // Animación con requestAnimationFrame
    const targetStyles = { width: 495, height: 432, left: 84, top: 309 };
    let currentWidth = 270;
    let currentHeight = 200;
    let currentLeft = 50;
    let currentTop = 50;
    const steps = 50;
    let stepCount = 0;
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;
  
    function animate() {
      if (stepCount >= steps) {
        educationBox.resize(targetStyles.width, targetStyles.height);
        educationBox.move(targetStyles.left, targetStyles.top);
        return;
      }
  
      stepCount++;
      currentWidth += incrementWidth;
      currentHeight += incrementHeight;
      currentLeft += incrementLeft;
      currentTop += incrementTop;
  
      educationBox.resize(currentWidth, currentHeight);
      educationBox.move(currentLeft, currentTop);
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });
  

// ================= WinBox Contact =================
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
  
    openWinBoxes.push(contactBox);
  
    // Animación con requestAnimationFrame
    const targetStyles = { width: 389, height: 203, left: 748, top: 555 };
    let currentWidth = 270;
    let currentHeight = 200;
    let currentLeft = 50;
    let currentTop = 50;
    const steps = 50;
    let stepCount = 0;
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;
  
    function animate() {
      if (stepCount >= steps) {
        contactBox.resize(targetStyles.width, targetStyles.height);
        contactBox.move(targetStyles.left, targetStyles.top);
        return;
      }
  
      stepCount++;
      currentWidth += incrementWidth;
      currentHeight += incrementHeight;
      currentLeft += incrementLeft;
      currentTop += incrementTop;
  
      contactBox.resize(currentWidth, currentHeight);
      contactBox.move(currentLeft, currentTop);
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });
  


// ================= WinBox Projects =================

projects.addEventListener("click", () => {
    // Cerrar todas las ventanas abiertas antes de abrir la de Projects
    closeAllWinBoxes();
  
    const projectsBox = new WinBox({
      title: "Projects",
      width: "270px",
      height: "200px",
      top: 10,
      right: "5%",
      bottom: 10,
      left: "5%",
      autosize: true,
      mount: projectsContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
      onclose: function () {
        // Remover esta ventana del arreglo al cerrarse manualmente
        const index = openWinBoxes.indexOf(this);
        if (index > -1) {
          openWinBoxes.splice(index, 1);
        }
      }
    });
  
    openWinBoxes.push(projectsBox);
  
    // Animación con requestAnimationFrame
    const targetStyles = { width: 1145, height: 645, left: 335, top: 59 };
    let currentWidth = 270;
    let currentHeight = 200;
    let currentLeft = 10;
    let currentTop = 10;
    const steps = 50;
    let stepCount = 0;
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;
  
    function animate() {
      if (stepCount >= steps) {
        projectsBox.resize(targetStyles.width, targetStyles.height);
        projectsBox.move(targetStyles.left, targetStyles.top);
        return;
      }
  
      stepCount++;
      currentWidth += incrementWidth;
      currentHeight += incrementHeight;
      currentLeft += incrementLeft;
      currentTop += incrementTop;
  
      projectsBox.resize(currentWidth, currentHeight);
      projectsBox.move(currentLeft, currentTop);
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });
  

// ================= WinBox CV (cierra todas las demás) =================
cv.addEventListener("click", () => {
    // Cerrar todas las ventanas abiertas antes de abrir la de CV
    closeAllWinBoxes();
  
    const cvBox = new WinBox({
      title: "CV",
      width: "270px",
      height: "200px",
      top: 50,
      right: "5%",
      bottom: 50,
      left: "5%",
      autosize: true,
      mount: cvContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
      onclose: function () {
        // Remover esta ventana del arreglo cuando se cierre manualmente
        const index = openWinBoxes.indexOf(this);
        if (index > -1) {
          openWinBoxes.splice(index, 1);
        }
      }
    });
  
    // Agregar la ventana de CV al arreglo global
    openWinBoxes.push(cvBox);
  
    // Configurar la animación
    const targetStyles = { width: 829, height: 709, left: 499, top: 50 };
    let currentWidth = 270;
    let currentHeight = 200;
    let currentLeft = 50;
    let currentTop = 50;
    const steps = 50;
    let stepCount = 0;
    const incrementWidth = (targetStyles.width - currentWidth) / steps;
    const incrementHeight = (targetStyles.height - currentHeight) / steps;
    const incrementLeft = (targetStyles.left - currentLeft) / steps;
    const incrementTop = (targetStyles.top - currentTop) / steps;
  
    function animate() {
      if (stepCount >= steps) {
        cvBox.resize(targetStyles.width, targetStyles.height);
        cvBox.move(targetStyles.left, targetStyles.top);
        return;
      }
  
      stepCount++;
      currentWidth += incrementWidth;
      currentHeight += incrementHeight;
      currentLeft += incrementLeft;
      currentTop += incrementTop;
  
      cvBox.resize(currentWidth, currentHeight);
      cvBox.move(currentLeft, currentTop);
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });
  
  

// ================= Efecto de escritura en el DOM =================
document.addEventListener("DOMContentLoaded", function () {
  const text = "Bl4ckH4t";
  
  let index = 0;
  let isDeleting = false;
  const speed = 150;
  const delay = 3000;
  const textContainer = document.querySelector(".text-container");
  const typedTextElement = document.createElement("span");
  const cursor = document.querySelector(".cursor");

  textContainer.insertBefore(typedTextElement, cursor);
  textContainer.style.display = "inline-block";
  textContainer.style.width = "8ch";
  textContainer.style.textAlign = "left";
  typedTextElement.style.fontWeight = "normal";
  typedTextElement.style.color = "#b90808";


  function typeEffect() {
    if (!isDeleting && index < text.length) {
      typedTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    } else if (!isDeleting && index === text.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, delay);
    } else if (isDeleting && index > 0) {
      typedTextElement.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, speed);
    } else {
      isDeleting = false;
      setTimeout(typeEffect, speed);
    }
  }
  typeEffect();
});




