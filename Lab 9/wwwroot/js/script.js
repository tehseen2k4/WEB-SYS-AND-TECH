// Regular Expressions
const regex = {
    name: /^[a-zA-Z\s]{2,30}$/,                   
    email: /^[a-zA-Z0-9._%+-]+@bahria\.edu\.pk$/,  // Fixed email regex
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,  
    phone: /^[0-9]{10}$/
};
  // Track validity of each field
  const validStatus = {
    name: false,
    email: false,
    password: false,
    phone: false
  };
  
  // Validation function
  function validationCheck() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
  
    // Name validation
    if (regex.name.test(nameInput.value.trim())) {
      validStatus.name = true;
      document.getElementById('nameError').textContent = "✅";
      nameInput.classList.add('valid');
      nameInput.classList.remove('invalid');
    } else {
      validStatus.name = false;
      document.getElementById('nameError').textContent = "❌ Only letters (2-30 chars)";
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
    }
  
    // Email validation
    if (regex.email.test(emailInput.value.trim())) {
      validStatus.email = true;
      document.getElementById('emailError').textContent = "✅";
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
    } else {
      validStatus.email = false;
      document.getElementById('emailError').textContent = "❌ Use your bahria.edu.pk email";
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
    }
  
    // Password validation
    if (regex.password.test(passwordInput.value.trim())) {
      validStatus.password = true;
      document.getElementById('passwordError').textContent = "✅";
      passwordInput.classList.add('valid');
      passwordInput.classList.remove('invalid');
    } else {
      validStatus.password = false;
      document.getElementById('passwordError').textContent = "❌ Min 6 chars (letters & numbers)";
      passwordInput.classList.add('invalid');
      passwordInput.classList.remove('valid');
    }
  
    // Phone validation
    if (regex.phone.test(phoneInput.value.trim())) {
      validStatus.phone = true;
      document.getElementById('phoneError').textContent = "✅";
      phoneInput.classList.add('valid');
      phoneInput.classList.remove('invalid');
    } else {
      validStatus.phone = false;
      document.getElementById('phoneError').textContent = "❌ 10 digit number";
      phoneInput.classList.add('invalid');
      phoneInput.classList.remove('valid');
    }
  }
  
  // Action method when form is submitted
  function actionMethod() {
    validationCheck(); // Double check before submit
  
    if (validStatus.name && validStatus.email && validStatus.password && validStatus.phone) {
      window.location.href = "destination.html"; // ✅ Redirect if all valid
      return false;
    } else {
      alert("❌ Please correct the form before submitting!");
      return false; // ❌ Stop submit
    }
  }
  
  // Live validation while typing
  document.getElementById('name').addEventListener('input', validationCheck);
  document.getElementById('email').addEventListener('input', validationCheck);
  document.getElementById('password').addEventListener('input', validationCheck);
  document.getElementById('phone').addEventListener('input', validationCheck);
  
  
  
// ... rest of your JavaScript code ... 