document.addEventListener("DOMContentLoaded", function() {
    const virusContainer = document.getElementById('virus-container');
    const numVirusIcons = 10;  // Number of virus icons to add
    const virusSymbols = ["🦠", "💀", "☠️", "👾", "💻"];  // Virus-like icons

    // Function to generate random position within the viewport
    function randomPosition() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
    }

    // Create virus icons
    for (let i = 0; i < numVirusIcons; i++) {
        const virus = document.createElement('div');
        virus.classList.add('virus');
        virus.innerText = virusSymbols[Math.floor(Math.random() * virusSymbols.length)];
        
        // Set initial random position
        const pos = randomPosition();
        virus.style.left = `${pos.x}px`;
        virus.style.top = `${pos.y}px`;

        virusContainer.appendChild(virus);
    }

    // Event to make viruses move toward the cursor
    document.addEventListener("mousemove", function(event) {
        const viruses = document.querySelectorAll('.virus');
        
        viruses.forEach(virus => {
            const rect = virus.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If the virus is close to the cursor, make it move closer
            if (distance < 150) {
                virus.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
            } else {
                virus.style.transform = 'translate(0, 0)';
            }
        });
    });
});