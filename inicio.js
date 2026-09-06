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