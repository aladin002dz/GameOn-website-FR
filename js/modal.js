function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
document.querySelector(".close").addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Form validation
const formElement = document.querySelector("form[name='reserve']");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");

function validateNames(nameInput) {
  if (nameInput.value.length < 2) {
    const errorMessage = `Veuillez entrer 2 caractères ou plus pour le champ du
     ${nameInput === firstNameInput ? "prénom" : "nom"}`;
    /* on peut aussi utiliser un message d'erreur générique
     const errorMessage = "Veuillez entrer 2 caractères ou plus pour ce champ." */
    displayErrorMessages(nameInput, errorMessage);
    return false;
  }
  removeErrorMessages(nameInput);
  return true;
}

function validateEmail() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(emailInput.value)) {
    displayErrorMessages(emailInput, "Veuillez entrer un email valide.");
    return false;
  }
  removeErrorMessages(emailInput);
  return true;
}

function validateBirthdate() {
  const birthdateValue = birthdateInput.value;
  const birthdate = new Date(birthdateValue);
  const currentDate = new Date();
  if (birthdateValue === '' || birthdate >= currentDate) {
    displayErrorMessages(birthdateInput, "Veuillez entrer une date de naissance valide.");
    return false;
  }
  removeErrorMessages(birthdateInput);
  return true;
}

function validateQuantity() {
  const quantity = quantityInput.value;
  if (quantity === '' || quantity === null || isNaN(quantity)) {
    displayErrorMessages(quantityInput, "Veuillez entrer un nombre entre 0 et 99.");
    return false;
  }
  removeErrorMessages(quantityInput);
  return true;
}

function validateLocation() {
  const locations = document.querySelectorAll("input[name='location']");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      removeErrorMessages(locations[0]);
      return true;
    }
  }
  displayErrorMessages(locations[0], "Veuillez choisir une localisation.");
  return false;
}

function validateCheckbox() {
  const checkbox = document.getElementById("checkbox1");
  if (!checkbox.checked) {
    displayErrorMessages(checkbox, "Veuillez accepter les conditions d'utilisation.");
    return false;
  }
  removeErrorMessages(checkbox);
  return true;
}

//form submit
formElement.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (!validateNames(firstNameInput) | !validateNames(lastNameInput) | !validateEmail() |
    !validateBirthdate() | !validateQuantity() | !validateCheckbox() | !validateLocation()) {
    return;
  }
  displayConfirmationMessage();
}

function displayConfirmationMessage() {
  formElement.reset();
  alert("Merci pour votre réservation !");
}

function displayErrorMessages(input, message) {
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", message);
  parentElement.setAttribute("data-error-visible", true);
}

function removeErrorMessages(input) {
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error-visible", false);
}


