document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('password-name?').value;

    // Check credentials against user data
    const user = userData.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('userName', user.name);
        window.location.href = '2_home.html'; // Go to home page
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});