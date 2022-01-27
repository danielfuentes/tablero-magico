let cantidad = document.querySelector('#cantidad');
let participantes = location.search;
let cantidadParticipantes = new URLSearchParams(participantes);

let cantParticipantes = parseInt(cantidadParticipantes.get('cantidad'));

let caja = document.querySelector('.caja');

for (let i = 1; i <= cantParticipantes; i++) {

    caja.innerHTML += ` <button class="bg-success text-white dimension boton"><h1>${i}</h1></button>`
}

let boton = document.querySelectorAll('.boton')
let arraybotones;
//console.log(botonMiLista)
boton.forEach(numero => {
    numero.addEventListener('click', function (e) {
        e.preventDefault()
        numero.classList.add('bg-danger');
    })
})            