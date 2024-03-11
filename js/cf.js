function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var phoneError = document.getElementById("phone-error");
    var addressError = document.getElementById("address-error");

    var isValid = true;

    // Name validation
    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    // Email validation
    if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    // Phone validation
    if (!validatePhone(phone)) {
        phoneError.innerHTML = "Invalid phone number";
        isValid = false;
    } else {
        phoneError.innerHTML = "";
    }

    // Address validation
    if (address.trim() === "") {
        addressError.innerHTML = "Address is required";
        isValid = false;
    } else {
        addressError.innerHTML = "";
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}