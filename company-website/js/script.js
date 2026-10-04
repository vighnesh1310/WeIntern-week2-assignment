const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;


        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }


        if (email === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        }


        if (phone === "") {
            phoneError.textContent = "Please enter your phone number.";
            isValid = false;
        }


        if (message === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        }


        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been submitted.";

            contactForm.reset();
        }

    });

}