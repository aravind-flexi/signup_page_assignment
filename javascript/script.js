document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
document.getElementById('dob').addEventListener('input', validateDOB);
document.getElementById('terms').addEventListener('change', validateTerms);

function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.length < 4) {
        nameError.textContent = 'Name must be at least 4 characters long';
        return false;
    }
    else {
        nameError.textContent = 'Success!';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        return false;
    } 
    else {
        emailError.textContent = 'Success!';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long, contain 1 number and 1 capital or special character';
        return false;
    }
    else {
        passwordError.textContent = 'Success!';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    }
    else {
        confirmPasswordError.textContent = 'Success!';
        return true;
    }
}

function validateDOB() {
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    if (!dob) {
        dobError.textContent = 'Date of Birth is required';
        return false;
    } 
    else {
        dobError.textContent = 'Success!';
        return true;
    }
}

function validateTerms() {
    const terms = document.getElementById('terms').checked;
    const termsError = document.getElementById('termsError');
    if (!terms) {
        termsError.textContent = 'You must agree to the terms and conditions';
        return false;
    }
    else {
        termsError.textContent = 'Success!';
        return true;
    }
}

function handleSignup(event) {
    event.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isDOBValid = validateDOB();
    const isTermsValid = validateTerms();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDOBValid && isTermsValid) {
        alert('Sign Up Successful!');
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } 
    else {
        alert('Please fill in all fields correctly');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail === 'aravindbabu663@gmail.com' && loginPassword === 'Aravind@9') {
        alert('Login Successful!');
	document.getElementById('button').addEventListener('click', function() {
        window.open('landing_page.html');
});        
	 
    } 
    else {
        alert('Invalid login credentials);
    }
}

/*function handleLogout() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}*/	
