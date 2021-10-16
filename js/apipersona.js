var txt = "";
var x = 0;
fetch('http://localhost:3200/personas/listado')
    .then(response => response.json())
    .then(data => {
        data.forEach((i) => {

            if (x < 6) {

                txt += "<div class=\"col-md-6 col-lg-4 mb-5\"><div class=\"portfolio-item mx-auto\"><div class=\"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100\"><div class=\"portfolio-item-caption-content text-center text-white\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=" + i.rutaImagen + " alt=\"...\" /></div></div>"

                //txt += '<img class=\"img-fluid\" src="' + i.rutaImagen + '"alt=\"...\" />'
            }
            x += 1;

        })
        console.log(txt);
        document.getElementById("selectordeliga").innerHTML = txt;

    });