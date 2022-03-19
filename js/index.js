
const onLoaded = () => {
    let timeText = fullTime();
    let dateTxt = fullDate();
    document.getElementById('mydate').innerHTML = `<div class="dynamic">${dateTxt} ${timeText}</div>`;
    setTimeout(onLoaded,200);
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
