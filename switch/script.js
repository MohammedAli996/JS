function validateLogin(event) {
    event.preventDefault();
  
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
  
    switch (usernameInput) {
      case "admin":
        if (passwordInput === "admin") {
          showMessage("Admin login successful.", "success");
          // Perform admin-specific actions or redirect to admin dashboard
        } else {
          showMessage("Invalid admin password.", "error");
          // Display error message for invalid password
        }
        break;
  
      case "student":
        if (passwordInput === "student") {
          showMessage("Student login successful.", "success");
          // Perform student-specific actions or redirect to student dashboard
        } else {
          showMessage("Invalid student password.", "error");
          // Display error message for invalid password
        }
        break;
  
      default:
        showMessage("Invalid username.", "error");
        // Display error message for invalid username
        break;
    }
  }
  
  function showMessage(message, messageType) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = messageType;
  }
  