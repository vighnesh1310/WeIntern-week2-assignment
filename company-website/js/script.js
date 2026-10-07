/* ==========================================================================
   NEXORA Technology - Interactive Features & Form Validation
   Clean, Readable & Beginner-Friendly JavaScript
   ========================================================================== */

// Wait for the HTML document to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {

    /* --------------------------------------------------------------------------
       1. Mobile Navigation Toggle
       -------------------------------------------------------------------------- */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        // Toggle the mobile navigation menu on button click
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            
            // Update button icon for open/close state
            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-expanded", "true");
            } else {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        // Close menu when clicking outside of navbar on mobile
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }


    /* --------------------------------------------------------------------------
       2. Contact Form Validation & Submission
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        // Get form input elements
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const messageInput = document.getElementById("message");

        // Get error display elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Helper function to show an error on a specific field
        function showError(inputElement, errorElement, message) {
            errorElement.textContent = message;
            inputElement.classList.add("input-error");
        }

        // Helper function to clear errors on a specific field
        function clearError(inputElement, errorElement) {
            errorElement.textContent = "";
            inputElement.classList.remove("input-error");
        }

        // Clear error styling immediately when user starts typing
        nameInput.addEventListener("input", function () {
            clearError(nameInput, nameError);
        });

        emailInput.addEventListener("input", function () {
            clearError(emailInput, emailError);
        });

        phoneInput.addEventListener("input", function () {
            clearError(phoneInput, phoneError);
        });

        messageInput.addEventListener("input", function () {
            clearError(messageInput, messageError);
        });

        // Form Submit Handler
        contactForm.addEventListener("submit", function (event) {
            // Prevent the default browser page reload
            event.preventDefault();

            // Read trimmed values
            const nameVal = nameInput.value.trim();
            const emailVal = emailInput.value.trim();
            const phoneVal = phoneInput.value.trim();
            const messageVal = messageInput.value.trim();

            // Reset previous messages
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(phoneInput, phoneError);
            clearError(messageInput, messageError);
            successMessage.style.display = "none";
            successMessage.textContent = "";

            let isValid = true;

            // 1. Name Validation
            if (nameVal === "") {
                showError(nameInput, nameError, "Please enter your full name.");
                isValid = false;
            } else if (nameVal.length < 2) {
                showError(nameInput, nameError, "Name must be at least 2 characters long.");
                isValid = false;
            }

            // 2. Email Validation (Simple standard email pattern)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailVal === "") {
                showError(emailInput, emailError, "Please enter your email address.");
                isValid = false;
            } else if (!emailPattern.test(emailVal)) {
                showError(emailInput, emailError, "Please enter a valid email address (e.g. name@example.com).");
                isValid = false;
            }

            // 3. Phone Validation (Numbers, spaces, dashes, minimum 7 digits)
            const phonePattern = /^[0-9+\s-]{7,15}$/;
            if (phoneVal === "") {
                showError(phoneInput, phoneError, "Please enter your contact phone number.");
                isValid = false;
            } else if (!phonePattern.test(phoneVal)) {
                showError(phoneInput, phoneError, "Please enter a valid phone number (at least 7 digits).");
                isValid = false;
            }

            // 4. Message Validation
            if (messageVal === "") {
                showError(messageInput, messageError, "Please enter your message or project details.");
                isValid = false;
            } else if (messageVal.length < 10) {
                showError(messageInput, messageError, "Message should be at least 10 characters long.");
                isValid = false;
            }

            // If all fields are valid, show confirmation
            if (isValid) {
                successMessage.textContent = "✓ Thank you! Your message has been sent successfully. Our team will reach out soon.";
                successMessage.style.display = "block";

                // Reset form fields
                contactForm.reset();

                // Smoothly scroll to the success message
                successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    }
});