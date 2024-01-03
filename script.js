const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const emailInput = document.querySelector(".mail.input");
const emailError = document.querySelector(".error.mail");
const selectInput = document.querySelector("#country");
const passwordInput = document.querySelector(".password.input");
const passwordConfirmInput = document.querySelector(".confirm.input");
const passwordError = document.querySelector(".error.password");
const passwordConfirmError = document.querySelector(".error.confirm");
const submitButton = document.querySelector("button[type='submit']");

function showError(input, errorElement, errorMessage) {
    if (!input.validity.valid || input.value === "") {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateInput(inputElement) {
    if (inputElement.classList.contains("mail")) {
        return showError(emailInput, emailError, "Invalid email...");
    } else if (inputElement.classList.contains("password")) {
        return showError(passwordInput, passwordError, "Too short...");
    } else if (inputElement.classList.contains("confirm")) {
        if (passwordConfirmInput.value !== passwordInput.value) {
            passwordConfirmError.textContent = "not the same password...";
            return false;
        } else {
            passwordConfirmError.textContent = "";
            return true;
        }
    }
}

form.addEventListener("input", function (event) {
    if (event.target.tagName.toLowerCase() === "input") {
        let currentInput = event.target;
        validateInput(currentInput);
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // check to see if the form is NOT valid
    for (let i = 0; i < allInputs.length; i++) {
        if (!validateInput(allInputs[i])) {
            return;
        }
    }
    // now its valid
    alert("congrats!!!");
});
