// Basic form validation or interaction logic can go here if needed

document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Sign up functionality to be added.");
});

document.getElementById("signin-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Sign in functionality to be added.");
});

document.getElementById("otp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("OTP verification functionality to be added.");
});

document.getElementById("feedback-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Feedback submitted successfully.");
});
// Example of form validation for feedback form
document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const feedback = document.querySelector('#feedback').value;

    if (!name || !email || !feedback) {
        alert('Please fill in all fields before submitting.');
        event.preventDefault();  // Prevent form submission
    }
});

