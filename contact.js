document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Display the confirmation message
        confirmationMessage.style.display = 'block';
        
        // Optionally, reset the form
        form.reset();
    });
});
