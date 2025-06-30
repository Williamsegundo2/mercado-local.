const form = document.getElementById('formProducto');
const lista = document.getElementById('listaProductos');

// Cargar productos guardados en LocalStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.forEach(agregarProductoHTML);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = document.getElementById('precio').value.trim();

  if (!titulo || !descripcion || !precio || isNaN(precio) || precio <= 0) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  const producto = { titulo, descripcion, precio };

  guardarProducto(producto);
  agregarProductoHTML(producto);

  form.reset();
});

// Guarda el producto en LocalStorage
function guardarProducto(prod) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.push(prod);
  localStorage.setItem('productos', JSON.stringify(productos));
}

// Agrega el producto al DOM
function agregarProductoHTML(prod) {
  const div = document.createElement('div');
  div.className = 'producto';
  div.innerHTML = `
    <h3>${prod.titulo}</h3>
    <p>${prod.descripcion}</p>
    <p><strong>Bs. ${prod.precio}</strong></p>
  `;
  lista.appendChild(div);
}
