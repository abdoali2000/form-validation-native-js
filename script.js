// Global Inputs, buttons & divs
const form = document.getElementById("registrationForm");
const userNameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const phoneField = document.getElementById("phone");
const registerBtn = document.getElementById("register-btn");
const errorBox = document.getElementById("errorMessages");
errorBox.className = "errorMessages";
const genderDiv = document.querySelector(".gender-options");
const languageDiv = document.querySelector(".language-options");

function errorHandle(event) {
    event.preventDefault();

    let hasError = false;

    // Username
    const userNameValue = userNameField.value.trim();
    const oldErrorEmpty = document.getElementById("username-error-empty");
    const oldErrorLength = document.getElementById("username-error-length");
    if (oldErrorEmpty || oldErrorLength) {
        oldErrorEmpty.remove();
        oldErrorLength.remove();
    }

    // Empty

    if (userNameValue === "") {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "username-error-empty";
        errorClone.textContent = "Username cannot be empty!";
        userNameField.insertAdjacentElement("afterend", errorClone);
    }

    //Length

       if ((userNameValue.length < 3 && userNameValue.length > 0) || userNameValue.length > 15) {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "username-error-length";
        errorClone.textContent = "Username length must be between 3:15 characters!";
        userNameField.insertAdjacentElement("afterend", errorClone);
    }


    // Email
    const emailValue = emailField.value.trim();
    const oldEmailErrorEmpty = document.getElementById("email-error-empty");
    const oldEmailErrorValid = document.getElementById("email-error-validation");
    if (oldEmailErrorEmpty || oldEmailErrorValid) {
        oldEmailErrorEmpty.remove();
        oldEmailErrorValid.remove();
    }
    
    // Empty
    if (emailValue === "") {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "email-error-empty";
        errorClone.textContent = "Email cannot be empty!";
        emailField.insertAdjacentElement("afterend", errorClone);
    }

    //Regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue) && emailValue.length > 0) {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "email-error-validation";
        errorClone.textContent = "Email is not valid!";
        emailField.insertAdjacentElement("afterend", errorClone);
    }

    // Password
    const passwordValue = passwordField.value.trim();
    const oldPasswordErrorEmpty = document.getElementById("password-error-empty");
    const oldPasswordErrorLength = document.getElementById("password-error-length");
    if (oldPasswordErrorEmpty || oldPasswordErrorLength) {
        oldPasswordErrorEmpty.remove();
        oldPasswordErrorLength.remove();
    }
    // Empty
     if (passwordValue === "") {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "password-error-empty";
        errorClone.textContent = "Password cannot be empty!";
        passwordField.insertAdjacentElement("afterend", errorClone);
    }

    // Length
     if (passwordValue.length < 6 && passwordValue.length > 0) {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "password-error-length";
        errorClone.textContent = "Password must be at least 6 characters!";
        passwordField.insertAdjacentElement("afterend", errorClone);
    }

   

    // Phone
    const phoneValue = phoneField.value.trim();
    const oldPhoneErrorEmpty = document.getElementById("phone-error-empty");
    const oldPhoneErrorValid = document.getElementById("phone-error-validation");
    if (oldPhoneErrorEmpty || oldPhoneErrorValid) {
        oldPhoneErrorEmpty.remove();
        oldPhoneErrorValid.remove();
    }

    //Empty
    if (phoneValue === "") {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "phone-error-empty";
        errorClone.textContent = "Phone number cannot be empty!";
        phoneField.insertAdjacentElement("afterend", errorClone);
    }

    //Regex
      const phoneRegex = /^(\+2)?(010|011|012|015)[0-9]{8}$/;
    if (!phoneRegex.test(phoneValue) && phoneValue.length > 0) {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "phone-error-validation";
        errorClone.textContent = "Phone number must start with 010, 011, 012, or 015 and be 11 digits!";
        phoneField.insertAdjacentElement("afterend", errorClone);
    }

  

    // Gender
    const genderField = document.querySelector('input[name="gender"]:checked');
    const oldGenderError = document.getElementById("gender-error");
    if (oldGenderError) {
        oldGenderError.remove();
    }

    if (!genderField) {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "gender-error";
        errorClone.textContent = "Please select your gender!";
        genderDiv.insertAdjacentElement("afterend", errorClone); 
    }

    // Language
    const selectedLanguages = document.querySelectorAll('input[name="language"]:checked');
    const oldLanguageError = document.getElementById("language-error");
    if (oldLanguageError) {
        oldLanguageError.remove();
    }

    if (selectedLanguages.length < 2) {
        hasError = true;
        const errorClone = errorBox.cloneNode(false);
        errorClone.className = "errorMessages";
        errorClone.id = "language-error";
        errorClone.textContent = "Please select at least two languages!";
        languageDiv.insertAdjacentElement("afterend", errorClone);
    }

    // Success Msg
    if (!hasError) {
        location.href = "success.html";
    }
}

form.addEventListener("submit", errorHandle);