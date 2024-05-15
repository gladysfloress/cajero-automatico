function login (){
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

if (username.value === "gladysflores" && password === "12345"){
    window.location.href = "index.html"
} else {
    mensaje.innerText = "Error al iniciar sesion"
    mensaje.style.color = "red"
}
}

