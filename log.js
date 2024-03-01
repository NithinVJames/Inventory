const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication with server-side logic (replace with your API call)
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Login successful, redirect to appropriate page
            window.location.href = '/dashboard';
        } else {
            errorMessage.textContent = data.error;
        }
    })
    .catch(error => {
        console.error(error);
        errorMessage.textContent = 'An error occurred. Please try again.';
    });
});
