// Login form handling
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!email || !password) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Show loading state
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Signing In...';
    loginBtn.disabled = true;
    
    // Simulate API call (replace with actual authentication)
    setTimeout(() => {
        // Mock authentication - replace with real API call
        if (email === 'demo@hapagbayanihan.org' && password === 'demo123') {
            showMessage('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            }, 1500);
        } else {
            showMessage('Invalid email or password. Try demo@hapagbayanihan.org / demo123', 'error');
        }
        
        // Reset button state
        loginBtn.textContent = originalText;
        loginBtn.disabled = false;
    }, 1500);
}

// Show message function
function showMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.login-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageEl = document.createElement('div');
    messageEl.className = `login-message ${type}`;
    messageEl.textContent = message;
    
    // Insert after form
    const form = document.querySelector('.login-form');
    form.parentNode.insertBefore(messageEl, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageEl) {
            messageEl.remove();
        }
    }, 5000);
}

// Social login handlers
document.addEventListener('DOMContentLoaded', function() {
    const socialBtns = document.querySelectorAll('.social-btn');
    
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.textContent.includes('Google') ? 'Google' : 'Facebook';
            showMessage(`${provider} login is not yet implemented.`, 'info');
        });
    });
});

// Add styles for login messages
const messageStyles = `
.login-message {
    padding: 12px 16px;
    border-radius: 6px;
    margin: 16px 0;
    font-size: 14px;
    font-weight: 500;
}

.login-message.success {
    background-color: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
}

.login-message.error {
    background-color: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
}

.login-message.info {
    background-color: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #dbeafe;
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet);