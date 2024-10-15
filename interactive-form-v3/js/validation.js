function validateName() {
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        document.getElementById('name-hint').style.display = 'block'; // Show hint
        return false; // Invalid
    } else {
        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
        document.getElementById('name-hint').style.display = 'none'; // Hide hint
        return true; // Valid
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        document.getElementById('email-hint').style.display = 'block'; // Show hint
        return false; // Invalid
    } else {
        emailInput.parentElement.classList.add('valid');
        emailInput.parentElement.classList.remove('not-valid');
        document.getElementById('email-hint').style.display = 'none'; // Hide hint
        return true; // Valid
    }
}

function validateActivities() {
    const activityCheckboxes = document.querySelectorAll('#activities-box input[type="checkbox"]');
    const activitiesFieldset = document.getElementById('activities');
    const activityChecked = Array.from(activityCheckboxes).some(checkbox => checkbox.checked);
    if (!activityChecked) {
        activitiesFieldset.classList.add('not-valid');
        activitiesFieldset.classList.remove('valid');
        document.getElementById('activities-hint').style.display = 'block'; // Show hint
        return false; // Invalid
    } else {
        activitiesFieldset.classList.add('valid');
        activitiesFieldset.classList.remove('not-valid');
        document.getElementById('activities-hint').style.display = 'none'; // Hide hint
        return true; // Valid
    }
}

function validateCreditCard() {
    const ccNumInput = document.getElementById('cc-num');
    if (!/^\d{13,16}$/.test(ccNumInput.value)) {
        ccNumInput.parentElement.classList.add('not-valid');
        ccNumInput.parentElement.classList.remove('valid');
        document.getElementById('cc-hint').style.display = 'block'; // Show hint
        return false; // Invalid
    } else {
        ccNumInput.parentElement.classList.add('valid');
        ccNumInput.parentElement.classList.remove('not-valid');
        document.getElementById('cc-hint').style.display = 'none'; // Hide hint
        return true; // Valid
    }
}

function validateZip() {
    const zipInput = document.getElementById('zip');
    if (!/^\d{5}$/.test(zipInput.value)) {
        zipInput.parentElement.classList.add('not-valid');
        zipInput.parentElement.classList.remove('valid');
        document.getElementById('zip-hint').style.display = 'block'; // Show hint
        return false; // Invalid
    } else {
        zipInput.parentElement.classList.add('valid');
        zipInput.parentElement.classList.remove('not-valid');
        document.getElementById('zip-hint').style.display = 'none'; // Hide hint
        return true; // Valid
    }
}

function validateCVV() {
    const cvvInput = document.getElementById('cvv');
    if (!/^\d{3}$/.test(cvvInput.value)) {
        cvvInput.parentElement.classList.add('not-valid');
        cvvInput.parentElement.classList.remove('valid');
        document.getElementById('cvv-hint').style.display = 'block'; // Show hint
        return false; // Invalid
    } else {
        cvvInput.parentElement.classList.add('valid');
        cvvInput.parentElement.classList.remove('not-valid');
        document.getElementById('cvv-hint').style.display = 'none'; // Hide hint
        return true; // Valid
    }
}

// Get the form element
const form = document.querySelector('form');

// Add an event listener for the submit event
form.addEventListener('submit', function (event) {
    // Validate all fields and sections
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidActivities = validateActivities();
    // Check the payment method before validating credit card
    const paymentMethod = document.getElementById('payment').value;
    let isValidCC = true;
    if (paymentMethod === 'credit-card' && validateCreditCard() && validateZip() && validateCVV()) {
        return true;
    } else {
        event.preventDefault();
    }

    // If all validations are true, submit the form (or perform any additional actions)
    if (isValidName && isValidEmail && isValidActivities && (paymentMethod !== 'credit-card' || (isValvalidateCreditCard() && validateZip() && validateCVV()))) {
        return true;
    } else {
        event.preventDefault();
    }

});
