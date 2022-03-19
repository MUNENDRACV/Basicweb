const onLoaded = () => {
    console.log(`Page Loaded`);
}
window.addEventListener('load', onLoaded);

const onLoginFormSubmit = (e) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // False Value inJS = false,0,'',null,undefined
    if (username && username === 'jason' && password && password === '1234') {
        window.location.href = 'file:///C:/Users/v-vishwash/Documents/Git_Repo/Tranining/Basicweb/basic.html';
    } else {
        alert('Enter Details')
    }
}

const goToLogin = () => {
    window.location.href = 'file:///C:/Users/v-vishwash/Documents/Git_Repo/Tranining/Basicweb/login.html';
}
