const baseDeDatos = [
    {
        id: 1,
        nombre: 'Tomates',
        precio: 1.745,
        imagen: 'img/images.jfif'
    },
    {
        id: 2,
        nombre: 'Mango',
        precio: 1.208,
        imagen: 'img/descarga (9).jfif'
    }, 
   
    {
        id: 3,
        nombre: 'Piña',
        precio: 2.164,
        imagen: 'img/descarga (10).jfif'
    },
    {
        id: 4,
        nombre: 'Papaya',
        precio: 2.342,
        imagen: 'img/descarga (11).jfif'
    },
    {
        id: 5,
        nombre: 'Mango',
        precio: 2.176,
        imagen: 'img/descarga (12).jfif'
    },
    {
        id: 6,
        nombre: 'Cosa Amarilla',
        precio: 1.536,
        imagen: 'img/descarga (13).jfif'
    },
    {
        id: 7,
        nombre: 'Calabacin',
        precio: 8.641,
        imagen: 'img/descarga (14).jfif'
    },
    {
        id: 8,
        nombre: 'Kiwi',
        precio: 1.745,
        imagen: 'img/images (1).jfif'
    },
    {
        id: 9,
        nombre: 'Manzana',
        precio: 2.176,
        imagen: 'img/images (2).jfif'
    },
    {
        id:10,
        nombre: 'Aguacate',
        precio: 2.891,
        imagen: 'img/images (3).jfif'
    },
    {
        id: 11,
        nombre: 'banano',
        precio: 2.1,
        imagen: 'img/images (4).jfif'
    },
    {
        id: 3,
        nombre: 'Melon',
        precio: 2.177,
        imagen: 'img/images (5).jfif'
    },
    {
        id: 12,
        nombre: 'Manzana',
        precio: 2.781,
        imagen: 'img/images (6).jfif'
    },
    {
        id: 13,
        nombre: 'Coco',
        precio: 2.671,
        imagen: 'img/images (7).jfif'
    },
    {
        id: 14,
        nombre: 'Pera M',
        precio: 2.156,
        imagen: 'img/images (8).jfif'
    },
    {
        id: 15,
        nombre: 'Calabacin',
        precio: 2.891,
        imagen: 'img/images (9).jfif'
    },
    {
        id: 16,
        nombre: 'Guallaba',
        precio: 2.671,
        imagen: 'img/images (10).jfif'
    },
    {
        id: 17,
        nombre: 'Pasas',
        precio: 2.671,
        imagen: 'img/images (11).jfif'
    },
    {
        id: 18,
        nombre: 'banano Verde',
        precio: 2.143,
        imagen: 'img/images (12).jfif'
    },
    {
        id: 19,
        nombre: 'Manzana',
        precio: 2.167,
        imagen: 'img/images (13).jfif'
    },
    {
        id: 20,
        nombre: 'Ajo',
        precio: 2.651,
        imagen: 'img/images (14).jfif'
    },
    {
        id: 21,
        nombre: 'Nose',
        precio: 2.451,
        imagen: 'img/images (15).jfif'
    },
    {
        id: 22,
        nombre: 'Jugo',
        precio: 2.122,
        imagen: 'img/images (16).jfif'
    },
    
    {
        id: 23,
        nombre: 'brocoli',
        precio: 2.122,
        imagen: 'img/images (17).jfif'
    },
    {
        id: 24,
        nombre: 'Fresas',
        precio: 1.785,
        imagen: 'img/images (18).jfif'
    },
    {
        id: 25,
        nombre: 'Naranja',
        precio: 2.341,
        imagen: 'img/images (19).jfif'
    },
    {
        id: 26,
        nombre: 'Pepinillo',
        precio: 2.341,
        imagen: 'img/images (20).jfif'
    },
    {
        id: 27,
        nombre: 'Kiwi',
        precio: 2.341,
        imagen: 'img/images (1).jfif'
    },
    {
        id: 28,
        nombre: 'Calabacin',
        precio: 2.341,
        imagen: 'img/images (8).jfif'
    },
    {
        id: 29,
        nombre: 'Pera',
        precio: 0.600,
        imagen: 'img/descarga (8).jfif'
    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();


function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();


 
