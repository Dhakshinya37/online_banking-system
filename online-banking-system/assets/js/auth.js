// Authentication JavaScript

// Toggle Password Visibility
function togglePassword(fieldId = 'password') {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = passwordField.nextElementSibling;
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Password Strength Checker
const passwordField = document.getElementById('reg-password');
if (passwordField) {
    passwordField.addEventListener('input', function() {
        const strengthBars = document.querySelectorAll('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        const password = this.value;
        
        // Reset
        strengthBars.forEach(bar => {
            bar.style.backgroundColor = '#e9ecef';
        });
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#6c757d';
        
        // Check password strength
        if (password.length === 0) {
            return;
        }
        
        let strength = 0;
        
        // Length check
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        
        // Complexity checks
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        
        // Update UI
        if (strength >= 4) {
            // Strong
            strengthBars[0].style.backgroundColor = '#4cc9f0';
            strengthBars[1].style.backgroundColor = '#4cc9f0';
            strengthBars[2].style.backgroundColor = '#4cc9f0';
            strengthText.textContent = 'Strong';
            strengthText.style.color = '#4cc9f0';
        } else if (strength >= 2) {
            // Medium
            strengthBars[0].style.backgroundColor = '#f8961e';
            strengthBars[1].style.backgroundColor = '#f8961e';
            strengthText.textContent = 'Medium';
            strengthText.style.color = '#f8961e';
        } else {
            // Weak
            strengthBars[0].style.backgroundColor = '#f72585';
            strengthText.textContent = 'Weak';
            strengthText.style.color = '#f72585';
        }
    });
}

// Form Validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username && password) {
            // Simulate login
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'index.html';
        } else {
            alert('Please fill in all fields');
        }
    });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const terms = document.getElementById('terms').checked;
        
        // Basic validation
        if (!fullname || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (!terms) {
            alert('You must agree to the terms and conditions');
            return;
        }
        
        // Simulate registration
        alert('Registration successful! Redirecting to login...');
        window.location.href = 'login.html';
    });
}

// Check if passwords match
const confirmPasswordField = document.getElementById('confirm-password');
if (confirmPasswordField) {
    confirmPasswordField.addEventListener('blur', function() {
        const password = document.getElementById('reg-password').value;
        const confirmPassword = this.value;
        
        if (password && confirmPassword && password !== confirmPassword) {
            this.style.borderColor = '#f72585';
            this.nextElementSibling.style.color = '#f72585';
        } else {
            this.style.borderColor = '#e9ecef';
            this.nextElementSibling.style.color = '#6c757d';
        }
    });
}