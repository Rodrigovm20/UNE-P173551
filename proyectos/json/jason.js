document.querySelector("#Json").addEventListener("click",(e)=>{

var myObj = { nombre:document.querySelector("#name").value , contra: document.querySelector("#pass").value, correo: document.querySelector("#email").value };

var myJSON = JSON.stringify(myObj);
document.querySelector("#box").textContent=myJSON
})

document.querySelector("#txt").addEventListener("click",(e)=>{
var myJSON = '{"nombre":"", "contra":, "correo":""}';
var myObj = JSON.parse(myJSON);
document.querySelector("#usuario")
})