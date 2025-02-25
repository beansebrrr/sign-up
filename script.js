const emailField = document.querySelector("#email-address");
const phoneNumberField = document.querySelector("#phone-number")
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");
const btnSubmit = document.querySelector("#btn-submit");
const passwordError = document.querySelector("#password-error");

const generalError = document.createElement("p");
generalError.classList.add("error-message");


/**
 *  Event Listeners go here
 */
emailField.addEventListener("input", () => handleInvalidEmail(emailField.value));
phoneNumberField.addEventListener("input", () => handleInvalidPhoneNumber(phoneNumberField.value));
btnSubmit.addEventListener("click", () => handlePasswordErrors(passwordField.value, confirmPasswordField.value));


/**
 * Invalid input handling
 */
const handleInvalidEmail = (email) => {
  const validEmail = email.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);

  const emailError = document.querySelector("#email-address+.error-message");
  emailError.textContent = validEmail ? "" : "Invalid email address.";
};

const handleInvalidPhoneNumber = (num) => {
  const validNum = num.match(/^\+?\d{3,17}$/gm);
  const phoneNumError = document.querySelector("#phone-number+.error-message");
  phoneNumError.textContent = validNum ? "" : "Invalid phone number.";
};

const handlePasswordErrors = (password, confirmation) => {
  const validPasswordFormat = (x) => x.match(/[\W+\d+A-Z+]{8,}/gmi);
  const passError = document.querySelector("#password+.error-message");
  const confError = document.querySelector("#confirm-password+.error-message");

  if (!validPasswordFormat(password)) {
    passError.textContent = "Must have a minimum of 8 characters and atleast 1 letter, 1 digit, and 1 special character.";
  } else if (confirmation === "") {
    confError.textContent = "Please confirm your password.";
  } else if (confirmation != password) {
    passError.textContent = confError.textContent = "Passwords must match.";
  } else {
    passError.textContent = confError.textContent = ""; 
  };
};