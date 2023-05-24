function validateForm() {
    // Check if the username is empty.
    if (document.getElementById("username").value == "") {
      alert("Please enter a username.");
      return false;
    }
  
    // Check if the password is empty.
    if (document.getElementById("password").value == "") {
      alert("Please enter a password.");
      return false;
    }
  
    // Check if the email is empty.
    if (document.getElementById("email").value == "") {
      alert("Please enter an email address.");
      return false;
    }
  
    // Check if the email is valid.
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(document.getElementById("email").value)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Return true if all validations pass.
    return true;
  }
  