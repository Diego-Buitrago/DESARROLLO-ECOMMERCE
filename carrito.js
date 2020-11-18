'use strict';

function get_localStorage() {

    let carrito = JSON.parse(localStorage.getItem('carrito'));

    return carrito;
}

const carrito = get_localStorage();

const items = document.querySelector('#items');
const h2El = document.querySelector('h2');
h2El.innerHTML = Object.values(carrito).length;

const pintarCarrito = () => {

    const template = document.getElementById('template-carrito').content;
    const fragment = document.createDocumentFragment();

    Object.values(carrito).forEach(product => {
        template.querySelector('img').src = product.route;
        template.querySelectorAll('td')[0].textContent = product.name;
        template.querySelectorAll('td')[1].textContent = product.quantity;
        template.querySelector('span').textContent = product.price;

        //botones
        template.querySelector('.btn-danger').dataset.id = product.id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    items.appendChild(fragment);

    pintarFooter();
    accionBotones();
}

const footer = document.getElementById('footer-carrito');
const pintarFooter = () => {

    footer.innerHTML = "";

    const template = document.getElementById('template-footer').content;
    const fragment = document.createDocumentFragment();

    // sumar totales
    const nQuantity = Object.values(carrito).reduce((acc, { quantity }) => acc + quantity, 0);
    const nPrice = Object.values(carrito).reduce((acc, { quantity, price }) => acc + quantity * price, 0);

    template.querySelectorAll('td')[0].textContent = nQuantity;
    template.querySelector('span').textContent = nPrice;

    const clone = template.cloneNode(true)
    fragment.appendChild(clone);

    footer.appendChild(fragment);

    const button = document.getElementById('vaciar-carrito');
    button.addEventListener('click', () => {
        localStorage.removeItem('carrito');
        location.reload();
    })
}

const accionBotones = () => {
    const buttonDelete = document.querySelectorAll('.btn-danger');

    buttonDelete.forEach(btn => {
        btn.addEventListener('click', () => {
            delete carrito[btn.dataset.id];
        })
    })
}

pintarCarrito();
accionBotones();