function submitForm() {
    var form = document.getElementById('registrationForm');
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return false;
    }
  
    var formData = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbyOm2CAYy8366iolYF1bX7N9kYLgDf-bCZ1PM1arYXzq4EJ1eZ3z13F_OwGL2bhURvU/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      alert("Form submitted successfully! Thank you for your registration. To register again, please refresh the page.");
      form.reset();
      disableForm();
    })
    .catch(error => {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    });
  
    return false;
  }
  
  function disableForm() {
    var formElements = document.getElementById('registrationForm').elements;
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].disabled = true;
    }
  }
  