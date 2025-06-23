document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
});
