function setAccessExpiration() {
    const expirationTime = Date.now() + 10 * 60 * 1000; // 10 minutos en milisegundos
    localStorage.setItem('accessExpiration', expirationTime);
}
function checkAccessExpiration() {
    const expirationTime = localStorage.getItem('accessExpiration');
    if (expirationTime && Date.now() > expirationTime) {
        localStorage.removeItem('accessExpiration');
        localStorage.removeItem('loggedInUser');
        document.getElementById('access-granted').style.display = 'none';
        document.getElementById('login-section').classList.remove('hidden');
    } else if (expirationTime) {
        document.getElementById('access-granted').style.display = 'block';
        document.getElementById('login-section').classList.add('hidden');
    }
}

if (user) {
    alert('Login exitoso!');
    document.getElementById('login-error-message').textContent = '';
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('access-granted').style.display = 'block';
    setAccessExpiration();
    localStorage.setItem('loggedInUser', JSON.stringify(user));
}
if (user) {
    alert('Login exitoso!');
    document.getElementById('login-error-message').textContent = '';
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('access-granted').style.display = 'block';
    setAccessExpiration();
    localStorage.setItem('loggedInUser', JSON.stringify(user));
}








