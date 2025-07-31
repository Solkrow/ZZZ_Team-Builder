const backgrounds = {
    bg1: "../images/Site-background-dark.png",
    bg2: "../images/Site-background-light.jpg",
};

let currentBackgroundIndex = 0;  // Keep track of the current background index
const backgroundKeys = Object.keys(backgrounds);  // Array of background keys ('bg1', 'bg2', 'bg3')

document.addEventListener('DOMContentLoaded', function() {
    // Handle the buttons in the button tab
    const buttons = document.querySelectorAll('.yellow-tab-buttons');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let buttonText = button.textContent.trim();
            let fileName = buttonText.toLowerCase().replace(/\s+/g, '-');
            window.location.href = fileName + '.html';
        });
    });
    
    // Handle click event for #title-showcase (logo)
    const logoShowcase = document.getElementById('logo-showcase');
    logoShowcase.addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to index.html when the logo is clicked
    });

    // Handle the background change button
    const bgChange = document.getElementById('background-change-button');
    bgChange.addEventListener('click', function() {
        // Cycle to the next background
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundKeys.length; // Loop back to the first one after the last
        const newBackgroundKey = backgroundKeys[currentBackgroundIndex];
        const newBackgroundImage = backgrounds[newBackgroundKey];
        
        // Change the background image
        document.body.style.backgroundImage = `url(${newBackgroundImage})`;
    });
});
