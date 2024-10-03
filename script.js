  // Initialize EmailJS with your user ID
  (function(){
    emailjs.init("rg2rcql4X6PSrnKL3");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_sz8xp6d', 'template_ay0nvb7', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
