// Function to toggle the menu for mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Function to simulate login and redirect to home page
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Assume login is successful, store login state
    localStorage.setItem('loggedIn', 'true');

    // Redirect to homepage
    window.location.href = "index.html"; // Replace with your homepage URL

    // Hide login link and show profile link and logout
    document.getElementById('login-link').style.display = 'none';
    document.getElementById('profile-link').style.display = 'block';
    document.getElementById('logout-link').style.display = 'block';
}

// Check if the user is logged in when the page loads
window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'block';
        document.getElementById('logout-link').style.display = 'block';
    }
};

// Handle logout
function logout() {
    localStorage.removeItem('loggedIn');
    document.getElementById('login-link').style.display = 'block';
    document.getElementById('profile-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'none';
    window.location.href = "login.html"; // Redirect to login page after logging out
}
