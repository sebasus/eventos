

let casilla = document.querySelectorAll(".casilla")

let casillero = 

casilla.forEach(function(casillero){
    casillero.addEventListener ('click', function (e) {



        casillero.style.backgroundColor = 'green'
     })
})



casilla.forEach(function(casillero){
    casillero.addEventListener ('dblclick', function (e) {



        casillero.style.backgroundColor = 'red'
     })
})
