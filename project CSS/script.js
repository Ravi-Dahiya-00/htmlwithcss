document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const referralCode = document.getElementById('referralCode').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        errorMessage.textContent = '';
        // Logic to create a new user
        console.log('User created:', { username, email, password, referralCode });
        alert('User created successfully!');
        // Clear the form after successful submission
        document.getElementById('form').reset();
    }
});
