document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        sendButton.disabled = true;


        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const USER_ID = 'N0asJ6vBAOwyoWqBS';
        const TEMPLATE_ID = 'template_soxf3oc';
        const SERVICE_ID = 'service_gn2u0t8';

        const emailParams = {
            from_name: name,
            reply_to: email,
            message: message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
            .then(response => {
                console.log('Email sent successfully:', response);

                
                modal.style.display = 'block';

                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';

                setTimeout(() => {
                    sendButton.disabled = false;
                }, 3000);
                
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
    });

    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});