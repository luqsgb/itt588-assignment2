document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('formMessage').innerText = 'Thank you for contacting us, ' + name + '!';
        this.reset();
        
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    document.getElementById('currentDate').textContent = currentDate.toLocaleString();
});