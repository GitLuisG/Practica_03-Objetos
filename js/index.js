// Constantes correspondientes a los elementos HTML pero como objetos JQuery.
const $txtNombre = $('#txtNombre');
const $txtApellidos = $('#txtApellidos');
const $btnCrearObjeto = $('#btnCrearObjeto');
const $btnCrearObjetoForma2 = $('#btnCrearObjetoForma2');
const $btnListarObjetos = $('#btnListarObjetos');

// Agregamos los handlers de eventos de los elementos HTML.
$btnCrearObjeto.on('click', btnCrearObjeto_click);
$btnListarObjetos.on('click', btnListarObjetos_click);
$btnCrearObjetoForma2.on('click', btnCrearObjetoForma2_click);

/**
 * Array donde guardaremos los objetos de tipo Persona.
 */
const personas = []; 

/**
 * Función event handler del elemento btnCreaObjeto.
 * @param {*} e Event argument
 */
function btnCrearObjeto_click(e) {

    // Crear objeto a partir de una función, como si la función fuera una clase.
    let persona1 = new Persona($txtNombre.val(), $txtApellidos.val());
    // Aquí modificamos los objetos.
    persona1.otraFuncion = function() {
        console.log('Hola desde otra función!');
    };
    personas.push(persona1);
    persona1.saludar();

}

function btnListarObjetos_click(e) {

    console.log('Listando de forma tradicional:');
    for (let i = 0; i < personas.length; i++) {
        let p = personas[i];
        p.saludar();
        if (p.otraFuncion) {
            p.otraFuncion();
        }
    }

    console.log('Listando de forma funcional:');
    personas.forEach((i, ix, arr) => console.log(i.getNombreCompleto()));

}

function btnCrearObjetoForma2_click(e) {

    // Crear objeto a partir de Json notation, definiendo todos sus atributos al
    // momento de crear el objeto.
    let personaCopy = {
        nombre: $txtNombre.val(),
        apellidos: $txtApellidos.val(),
        getNombreCompleto: function() {
            return this.nombre + ' ' + this.apellidos;
        },
        saludar: function() {
            console.log(this.getNombreCompleto() + ' dice HI!');
        }
    };
    personas.push(personaCopy);
    
}

/**
 * Representa una persona.
 * @param {string} nombre Nombre de la persona.
 * @param {string} apellidos Apellidos de la persona.
 */
function Persona(nombre, apellidos) {

    // Con this agregamos variables al objeto contenido en la función Persona.
    this.nombre = nombre;
    this.apellidos = apellidos;

    // De igual forma, con this agregamos funciones/métodos al objeto.

    this.saludar = function () {
        console.log(this.getNombreCompleto() + ' dice Hola' );
    }

    this.getNombreCompleto = function() {
        return this.nombre + ' ' + this.apellidos;
    }

}
