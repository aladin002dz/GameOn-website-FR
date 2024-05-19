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
  console.log("validateFirstName");
  const parentElement = nameInput.parentElement;
  if (nameInput.value.length < 2) {
    parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    parentElement.setAttribute("data-error-visible", true);
    return false;
  }
  parentElement.setAttribute("data-error-visible", false);
  return true;
}

function validateLastName() {
  console.log("validateLastName");
  const parentElement = lastNameInput.parentElement;
  if (lastNameInput.value.length < 2) {
    parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    parentElement.setAttribute("data-error-visible", true);
    return false;
  }
  parentElement.setAttribute("data-error-visible", false);
  return true;
}

formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (!validateNames(firstNameInput) | !validateNames(lastNameInput)) {
    return;
  }
  displayConfirmationMessage();
}

function displayConfirmationMessage() {
  formElement.reset();
  alert("Merci pour votre réservation !");
}


