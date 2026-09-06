function irAPregu()
{
    window.location.href = "pregu.html";
}

document.addEventListener ("click", irAPregu)
document.addEventListener ("keydown", irAPregu)
document.addEventListener ("contextmenu", function (e) 
{
    e.preventDefault();
    irAPregu();
}
);

if ("ontouchstart" in window) {
    document.getElementById("iniciar").textContent = "TOCÁ LA PANTALLA";
}