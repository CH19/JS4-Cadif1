'use strict';
const valueForms = []
// let users = []
const pagina = new Pagina()
let user = new Object();
user.name = '';
user.email = '';
user.password = '';
user.phone = '';
const header = document.querySelector('header');
header.classList.add('d-flex')
header.classList.add('justify-content-around')
header.classList.add('align-items-center')
const main = document.querySelector('main');
$(function(){
// Practice of objetct creating class one 
// Objetos 
// Asignacion de Funciones constructoras 
function jugador(){
  this.usuario = 'chris'; //Esta forma de hacer funciones sirve para ya cargar un objeto y al momento de crearlo tener parametros establecidos
  this.email = '';
  this.password = '';
  this.phone = '';
}
// Practicando la creacion de objetos 
class persona{
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id; 
  }
  saludar(){
    console.log('Hola min nombre es ' + this.name);
  }
  cambiarNombre(newName){
    this.name = newName
  }
}
//Probando creacion de un objeto persona, primeros metodos y getters con setters 

function jugada(seleccion, jugador){
  this.seleccion = seleccion;
  this.jugador = jugador;
}

const namePlayer = Object.keys(user);
//Arreglo para obtener los Strings de los valores del formulario
// header.classList.add('h-50');

  let IniciarSesionEstructura = `
  <form id="SignIn">
  ${pagina.createForm(`${namePlayer[0]}Sesion`, 'text', 'Introduce tu nombre de usuario')}
  ${pagina.createForm(`${namePlayer[2]}Sesion`, 'text', 'Introduce tu contrasenna')}
  
  <button type="submit" id="sendSetion" class="btn btn-primary">Submit</button>
  
  </form>
  `;
  let formestrucutra = `
  <form id="formu1">
  ${pagina.createForm(namePlayer[0],'text','Introduce tú nombre')}
  ${pagina.createForm(namePlayer[1], 'email','Ten cuidado colocando tu mail')}
  ${pagina.createForm(namePlayer[2], 'password','Introduce tú contrasenna')}
  ${pagina.createForm(namePlayer[3], 'text','Introduce tu numero de telefono' )}
  <div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" id="sendButton" class="btn btn-primary">Submit</button>
  </form>
  `;
header.innerHTML = `
<figure style="width: 200px; height: 100px;">
<img src="./Anexos/Google_Play-Logo.wine.svg" style="width: 100px; height: 100px;" alt="">
</figure>
`;
$(header).append(modalStructure(IniciarSesionEstructura, 'SignIn'));
$(header).append(modalStructure(formestrucutra, 'Registrarse'));

// Funcion para crear los elementos del formulario de control de manera reusable 
// Se prueba el vlaue del formulario para ver si se almacena y se muestra 
document.getElementById('formu1').addEventListener('submit', (event)=>{
  event.preventDefault();
  // event.stoppropagation();
  valueForms.forEach(value=>{
    user[value] = $(`#${value}Input`).val()
  })
  console.log(user);
  console.log();
  welcomeUser(user['name']);

})
  })
  
  // Main 
  main.innerHTML = `

  ${pagina.createJugada()}
  `
  function  modalStructure(contenido, mensajeButton){
    let  estructura = `
      <button type="button" class="btn btn-primary h-100 rounded" data-bs-toggle="modal" data-bs-target="#${mensajeButton}staticBackdrop">
      ${mensajeButton ? mensajeButton : 'Registrarte'}
  </button>
  
  <div class="modal fade" id="${mensajeButton}staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${mensajeButton}staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="${mensajeButton}staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${contenido}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
      `
      return estructura;
    }
  function welcomeUser(name){
    if(name != ''){
    main.append(document.createElement('h1').textContent = `Bienvenido ${name}`);
  }else{
   main.append(document.createElement('h1').textContent = 'Es necesario que te registres')
  }
  }
var users;
 fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{ users = json;});
;


