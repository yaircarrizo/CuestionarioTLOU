function correcta(rele, reco) {
    return rele === reco;
}

const form = document.getElementById("trivia");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreUsuario = document.getElementById("nomb").value;

    let puntaje = 0;

    const pregone = document.querySelector('input[name="nombr"]:checked');
    if (pregone && correcta(pregone.id, 'joel')) 
    {
        puntaje++;
    }

    const pregtwo = document.querySelector('input[name="lug"]:checked');
    if (pregtwo && correcta(pregtwo.id, 'bos'))
    {
        puntaje++;
    }

    const pregthree = document.querySelector('input[name="tra"]:checked');
    if (pregthree && correcta(pregthree.id, 'infe'))
    {
        puntaje++;
    }

    const pregfour = document.querySelector('input[name="tip"]:checked');
    if (pregfour && correcta(pregfour.id, '6'))
    {
        puntaje++;
    }

    const pregfive = document.querySelector('input[name="fuer"]:checked');
    if (pregfive && correcta(pregfive.id, 'rat'))
    {
        puntaje++;
    }

    const pregsix = document.querySelector('input[name="sol"]:checked');
    if (pregsix && correcta(pregsix.id, 'no'))
    {
        puntaje++;
    }

    const pregseven = document.querySelector('input[name="cuan"]:checked');
    if (pregseven && correcta(pregseven.id, 'two'))
    {
        puntaje++;
    }

    const pregeight = document.querySelector('input[name="serie"]:checked');
    if (pregeight && correcta(pregeight.id, 'sipi'))
    {
        puntaje++;
    }

    const pregnine = document.querySelector('input[name="año"]:checked');
    if (pregnine && correcta(pregnine.id, '2013'))
    {
        puntaje++;
    }

    const pregten = document.querySelector('input[name="aco"]:checked');
    if (pregten && correcta(pregten.id, 'e'))
    {
        puntaje++;
    }

    localStorage.setItem("nombre", nombreUsuario);
    localStorage.setItem("puntaje", puntaje);
    window.location.href = "final.html";
});