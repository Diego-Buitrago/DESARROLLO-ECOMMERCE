'use strict';

const pantalon = [{
        id: 1,
        name: "Pijama pantalon",
        price: 35000,
        route: "static/imagenes/pantalon/1.jpg"
    },
    {
        id: 2,
        name: "Pijama pantalon",
        price: 32000,
        route: "static/imagenes/pantalon/2.jpg"
    },
    {
        id: 3,
        name: "Pijama pantalon",
        price: 38000,
        route: "static/imagenes/pantalon/3.jpg"
    },
    {
        id: 4,
        name: "Pijama pantalon",
        price: 36000,
        route: "static/imagenes/pantalon/4.jpg"
    },
    {
        id: 5,
        name: "Pijama pantalon",
        price: 35000,
        route: "static/imagenes/pantalon/5.jpg"
    },
    {
        id: 6,
        name: "Pijama pantalon",
        price: 40000,
        route: "static/imagenes/pantalon/6.jpg"
    },
    {
        id: 7,
        name: "Pijama pantalon",
        price: 32000,
        route: "static/imagenes/pantalon/7.jpg"
    },
    {
        id: 8,
        name: "Pijama pantalon",
        price: 34000,
        route: "static/imagenes/pantalon/8.jpg"
    },
    {
        id: 9,
        name: "Pijama pantalon",
        price: 37000,
        route: "static/imagenes/pantalon/9.jpg"
    },
    {
        id: 10,
        name: "Pijama pantalon",
        price: 40000,
        route: "static/imagenes/pantalon/10.jpg"
    }
]

for (let i = 0; i < pantalon.length; i++) {

    const imEl = document.getElementById(`img${i+1}`);
    const h3El = document.getElementById(`h3-${i+1}`);

    imEl.setAttribute('src', `${pantalon[i].route}`)
    h3El.innerHTML = `$ ${pantalon[i].price}`
}

function get_localStorage() {

    let carrito = JSON.parse(localStorage.getItem('carrito'));

    return carrito;
}

const carrito = get_localStorage();

const detectarBotones = (data) => {
    const buttons = document.querySelectorAll('.div-pantalon button');

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


detectarBotones(pantalon);

const h2El = document.querySelector('h2');
h2El.innerHTML = Object.values(carrito).length;