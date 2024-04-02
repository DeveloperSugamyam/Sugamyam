document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset(); // Reset the form after successful submission
            }, function (error) {
                console.log('FAILED...', error);
                alert('Error sending message. Please try again later.');
            });
    });
});
