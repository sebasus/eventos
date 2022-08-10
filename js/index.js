let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validar= (e)=>{
    e.preventDefault()
    console.log (e.target)
    let arrayForm = e.target
    let comentarios = arrayForm[3]


    if (!comentarios.value) {
        alert('Añade un comentario, por favor.')
    } 

})

