const username = document.getElementById('username');
const pass = document.getElementById('pass');
const loginBtn = document.getElementById('submit');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (username.value === 'admin' && pass.value === '1') {
        alert('Login successful!');
        window.location.href = 'Homepage.html';
    } else {
        alert('Invalid username or password!');
    }
}
);
