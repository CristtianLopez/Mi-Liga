var txt = "";
var x = 0;
fetch('http://localhost:3200/personas/listado')
    .then(response => response.json())
    .then(data => {
        data.forEach((i) => {

            if (x < 6) {

                txt += '<img class=\"img-fluid\" src="' + i.rutaImagen + '"alt=\"...\" />'
            }
            x += 1;

        })
        console.log(txt);
        document.getElementById("selectordeliga").innerHTML = txt;

    });