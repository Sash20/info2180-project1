// Add your JavaScript here

window.addEventListener("DOMContentLoaded", () => {
    // Get the newsletter form, email input, and message div
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const messageDiv = document.querySelector(".newsletter .message");
  
    if (!form || !emailInput || !messageDiv) {
      // If the elements aren't found, just stop quietly
      return;
    }
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // prevent real form submission / page refresh
  
      const email = emailInput.value.trim();
  
      if (email === "") {
        // No email entered
        messageDiv.textContent = "Please enter a valid email address.";
      } else {
        // Show success message with the entered email
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        // Optional: clear the input after success
        // emailInput.value = "";
      }
    });
  });
  