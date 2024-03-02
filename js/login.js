// Email validation
function validateEmail() {
    const emailInput = document.getElementById('inputEmail');
    const emailHelp = document.getElementById('emailHelp');
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailInput.value)) {
        emailHelp.textContent = 'Invalid email address';
    } else {
        emailHelp.textContent = '';
    }
}

function validateForm() {
    validateEmail();

    // Password validation
    const passwordInput = document.getElementById('inputPassword');
    const passwordHelp = document.getElementById('passwordHelp');
    
    if (passwordInput.value.length < 8) {
        passwordHelp.textContent = 'Password must be at least 8 characters';
    } else {
        passwordHelp.textContent = '';
    }

    // If all validations pass, submit the form
    const emailHelp = document.getElementById('emailHelp');
    if (emailHelp.textContent === '' && passwordHelp.textContent === '') {
        // Submit the form or perform other actions
        alert('Form submitted successfully!');
    }
}
