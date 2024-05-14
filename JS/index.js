document.addEventListener('DOMContentLoaded', function () {
    obtenerDatos();
});


//<div class="col-md-4 col-sm-6">
  //<div class="card mb-2 " >
    //<img src="https://falabella.scene7.com/is/image/Falabella/883075668_1?wid=1500&hei=1500&qlt=70" class="card-img-top" alt="...">
    //<div class="card-body" width="400" height="300">
    //<details>
    //<DIV CLASS="BOX">
     // <h5 class="card-title">Blazer Mujer Basement</h5>
     //</DIV>
     //<br></br>
     //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//</details>
//<a href="#" class="btn btn-primary">Go somewhere</a>
//    </div>

function CrearCardDinamica(producto){

const divCol = document.createElement('div');
divCol.classList.add('col-xl-3','col-md-4', 'col-sm-6');


const divMb = document.createElement('div');
divMb.classList.add('card','mb-2');

const imagen = document.createElement('img');
imagen.classList.add('card-img-top');
imagen.setAttribute('src', producto.image);
imagen.setAttribute('height', '350px');


imagen.classList.add('card-img-top');

const divBody = document.createElement('div');
divBody.classList.add('card-body');
divBody.setAttribute('width', '400px');
divBody.setAttribute('height', '600px');

const detalle = document.createElement('details');

const caja =document.createElement('div');
caja.classList.add('box');

const titulo = document.createElement('summary');
titulo.classList.add('card-title');
titulo.textContent= producto.title;

const descripcion = document.createElement('p1');
descripcion.classList.add('card-text');
descripcion.textContent=producto.description;

const boton = document.createElement('a');
boton.setAttribute('href', '#');
boton.classList.add('btn','btn-primary');
boton.textContent=('Agregar Al Carrito');

const br = document.createElement('br');

const precio = document.createElement('p1');
precio.classList.add('card-text');
precio.textContent=  producto.price;


divCol.appendChild(divMb);
divMb.appendChild(imagen);
divMb.appendChild(divBody);
divBody.appendChild(caja);
caja.appendChild(titulo);
divBody.appendChild(detalle);
detalle.appendChild(descripcion);
detalle.appendChild(br);
detalle.appendChild(precio);
divBody.appendChild(boton);

return divCol;
};

async function obtenerDatos() {
    const url = 'https://fakestoreapi.com/products';

    try {
        const productos = await fetch(url);
        
        const productJSON = await productos.json();
        console.log(productJSON);
        recorrerDatos(productJSON);
    } catch (error){
       


    }


}

function recorrerDatos(producto) {

    const padresillo = document.getElementById('padresillo')
    
    producto.forEach(producto => {
        const lista = CrearCardDinamica(producto);
        padresillo.appendChild(lista);
        
    });
}