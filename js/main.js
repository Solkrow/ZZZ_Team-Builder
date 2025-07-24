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
});
