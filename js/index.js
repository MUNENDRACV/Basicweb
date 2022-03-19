
const onLoaded = () => {
    let timeText = fullTime();
    let dateTxt = fullDate();
    document.getElementById('mydate').innerHTML = `<div class="dynamic">${dateTxt} ${timeText}</div>`;
    setTimeout(onLoaded, 200);
}

window.addEventListener('load', onLoaded);

function fullTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let res = h + ":" + m + ":" + s;
    return res;
}
function fullDate() {
    let date = new Date();
    let localDate = date.toLocaleDateString().replaceAll("/", ":") //.replaceAll used for slash b/w date and insert colon//
    // console.log(localDate);
    return localDate;
}
function add(a, b) {
    console.log(a + b);
}
add(a = 2, b = 3);
add(2, 3);


const onLoginFormSubmit = (e) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    // False Value inJS = false,0,'',null,undefined
    if (username && username === 'jason' &&
     password && password === '1234' &&
     phone && phone ==='1234567890'&&
     city && city ==='bangalore') {
         sessionStorage.setItem('username',username);
         sessionStorage.setItem('cityname',city);
         sessionStorage.setItem('pno',phone);
        window.location.href = 'file:///F:/Git%20Repo/BasicWeB%20project/Basicweb/basic.html';
    } else {
        alert('Enter Details')
    }
}

const goToLogin = () => {
    window.location.href = 'file:///F:/Git%20Repo/BasicWeB%20project/Basicweb/login.html';
}

   

