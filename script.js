const lista = document.getElementById("lista");

var personas = ['Pedro Fernandez', 'Juan perez'];

const agregarPersona = () => {
    let nombre = document.getElementById("nombre");
    lista.innerHTML = '';
    personas.push(nombre.value);

    mostrarValores();
    nombre.value = "";
}

const mostrarValores = () => {
    personas.map(persona => {
        let li = document.createElement('li');
        li.innerHTML = persona;
        lista.appendChild(li);
    })
}
const borrarValores = () => {
    lista.innerHTML = '';
    personas = [];
}

mostrarValores();