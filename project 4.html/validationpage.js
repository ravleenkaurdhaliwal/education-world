const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

function validate(e) {
  
  hideErrors();

  
  if (formHasErrors()) {
    
    e.preventDefault();

    
    return false;
  }

  
  return true;

}

form.addEventListener("submit", function(event) {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    showError(nameInput, "Name is required");
  }

  if (!/^\d{10}$/.test(phoneInput.value)) {
    isValid = false;
    showError(phoneInput, "Please enter a valid 10-digit phone number");
  }

  if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
    isValid = false;
    showError(emailInput, "Please enter a valid email address");
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function showError(input, message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;

  input.classList.add("error");
  input.parentNode.insertBefore(errorDiv, input.nextSibling);

  input.addEventListener("input", function() {
    input.classList.remove("error");
    if (input.nextSibling === errorDiv) {
      input.parentNode.removeChild(errorDiv);
    }
  });

  input.focus();
  input.select();
}
;


       
        

        
        


