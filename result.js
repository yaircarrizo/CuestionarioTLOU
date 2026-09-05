const puntaje = localStorage.getItem("puntaje"); 
document.getElementById("result").textContent = puntaje + "/10";
const nombre = localStorage.getItem("nombre");
document.getElementById("nomb").textContent = nombre;