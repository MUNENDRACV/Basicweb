window.addEventListener('load', onloaded);
function onloaded(){
let name;// var decliration
name =sessionStorage.getItem('username')
document.getElementById('name').innerHTML=name;
}