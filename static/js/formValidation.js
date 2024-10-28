function validateForm() {
    var form = document.getElementById('registrationForm');
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return false;
    }

    // If the form is valid, show the success message
    document.getElementById('successMessage').style.display = 'block';


    // If the form is valid, show the success message as an alert
    // alert("Form submitted successfully! Thank you for your registration. To register again, please refresh the page.");

    // Optionally, you can reset the form after successful submission
    form.reset();
    form.classList.remove('was-validated');

    // Disable all form elements
    var formElements = form.elements;
    for (var i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }

    // Prevent the form from actually submitting to demonstrate the message
    event.preventDefault();
    return false;
}
// Additional custom validations can be added here
document.getElementById('validationCustom09').addEventListener('blur', function () {
    var websiteInput = this.value;
    if (websiteInput && !websiteInput.startsWith('http://') && !websiteInput.startsWith('https://')) {
        this.setCustomValidity('Please enter a valid URL starting with http:// or https://');
    } else {
        this.setCustomValidity('');
    }
});