'use strict';

const short = [{
        id: 11,
        name: "Pijama short",
        price: 30000,
        route: "static/imagenes/short/1.jpg"
    },
    {
        id: 12,
        name: "Pijama short",
        price: 32000,
        route: "static/imagenes/short/2.jpg"
    },
    {
        id: 13,
        name: "Pijama short",
        price: 25000,
        route: "static/imagenes/short/3.jpg"
    },
    {
        id: 14,
        name: "Pijama short",
        price: 28000,
        route: "static/imagenes/short/4.jpg"
    },
    {
        id: 15,
        name: "Pijama short",
        price: 35000,
        route: "static/imagenes/short/5.jpg"
    },
    {
        id: 16,
        name: "Pijama short",
        price: 33000,
        route: "static/imagenes/short/6.jpg"
    },
    {
        id: 17,
        name: "Pijama short",
        price: 32000,
        route: "static/imagenes/short/7.jpg"
    },
    {
        id: 18,
        name: "Pijama short",
        price: 34000,
        route: "static/imagenes/short/8.jpg"
    },
    {
        id: 19,
        name: "Pijama short",
        price: 30000,
        route: "static/imagenes/short/9.jpg"
    },
    {
        id: 20,
        name: "Pijama short",
        price: 33000,
        route: "static/imagenes/short/10.jpg"
    }
]

for (let i = 0; i < short.length; i++) {

    const imEl = document.getElementById(`img${i+1}`);
    const h3El = document.getElementById(`h3-${i+1}`);

    imEl.setAttribute('src', `${short[i].route}`)
    h3El.innerHTML = `$ ${short[i].price}`
}

function get_localStorage() {

    let carrito = JSON.parse(localStorage.getItem('carrito'));

    return carrito;
}

const carrito = get_localStorage();

const detectarBotones = (data) => {
    const buttons = document.querySelectorAll('.div-short button');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = data.find(item => item.id === parseInt(btn.id));
            product.quantity = 1;
            if (carrito.hasOwnProperty(product.id)) {
                product.quantity = carrito[product.id].quantity + 1;
            }

            carrito[product.id] = {...product };
            localStorage.setItem('carrito', JSON.stringify(carrito));
            location.reload();
        })
    })
}


detectarBotones(short);

const h2El = document.querySelector('h2');
h2El.innerHTML = Object.values(carrito).length;