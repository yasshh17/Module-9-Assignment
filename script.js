document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        clearErrors();

        
        const name = document.getElementById('name').value;
        const yearOfBirth = document.getElementById('year-of-birth').value;
        const usResident = document.getElementById('us-resident').checked;
        const zipcode = document.getElementById('zipcode').value;
        const password = document.getElementById('password').value;
        const pizza = document.getElementById('pizza').value;

        
        let valid = true;

        if (name.length < 3) {
            showError('name', 'Name must be at least 3 characters');
            valid = false;
        }

        if (yearOfBirth < 1901 || yearOfBirth > 2099) {
            showError('year-of-birth', 'Year of Birth must be between 1901 and 2099');
            valid = false;
        }

        if (usResident && (zipcode.length !== 5 || isNaN(zipcode))) {
            showError('zipcode', 'Zipcode must be a 5-digit number');
            valid = false;
        }

        if (password.length < 8) {
            showError('password', 'Password must be at least 8 characters');
            valid = false;
        }

        if (pizza === '') {
            showError('pizza', 'Please select your preferred type of pizza');
            valid = false;
        }

        
        if (valid) {
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = 'Form submitted successfully! Enjoy your pizza!';
            form.reset();
        }
    });

    function showError(field, message) {
        const errorDiv = document.getElementById(`${field}-error`);
        errorDiv.textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.textContent = '';
        });
    }
});
