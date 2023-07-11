'use strict';
const valueForms = []
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
let a = new persona('christian', 17, '243234');
console.log(a);
a.saludar();
a.cambiarNombre('Pedro');
a.saludar();
const imagenes = {
  direcciones: [],
  titulo: []
}
function jugada(seleccion, jugador){
  this.seleccion = seleccion;
  this.jugador = jugador;
}
const namePlayer = Object.keys(user);
//Arreglo para obtener los Strings de los valores del formulario
// header.classList.add('h-50');
  let Formestrucutra = `
  <form id="formu1">
  ${createForm(namePlayer[0],'text','Introduce tú nombre')}
  ${createForm(namePlayer[1], 'email','Ten cuidado colocando tu mail')}
  ${createForm(namePlayer[2], 'password','Introduce tú contrasenna')}
  ${createForm(namePlayer[3], 'text','Introduce tu numero de telefono' )}
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
<button type="button" class="btn btn-primary h-100 rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Registrarte
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${Formestrucutra}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
`;

// console.log(valueForms)
// Funcion para crear los elementos del formulario de control de manera reusable 
// Se prueba el vlaue del formulario para ver si se almacena y se muestra 
// $('#sendButton').on('submit',function(event){
document.getElementById('formu1').addEventListener('submit', (event)=>{
  event.preventDefault();
  event.stoppropagation();
  valueForms.forEach(value=>{
    user[value] = $(`#${value}Input`).val()
  })
  console.log(user);
  console.log();
  welcomeUser(user['name']);

})
// });
  // valueForms.forEach(function(value){
    //   console.log('hola ' + value)
    // })
    
  })
  
  // Main 
  main.innerHTML = `

  ${createJugada('Holi')}
  `
  function createForm(comunicador, inputType, mensaje){
    // user = {comunicador: ''};
    let estructura = `
      <div class="mb-3">
      <label for="${comunicador}Input" class="form-label">${comunicador}</label>
      <input type="${inputType}" class="form-control" id="${comunicador}Input" required>
      <div id="${comunicador}Help" class="form-text">${mensaje}</div>
    </div>
      `
      // Se agrega el nombre del id de los formularios y los label a un arreglo para usarlo mas tarde 
      valueForms.push(comunicador);
      // se retorna la estructura en forma de string para usarlo de forma en componente en el innerhtml 
      return estructura
  }
  function createJugada(mensaje){
    const estructura = `
    <div>
    <input type="text" placeholder="${(mensaje) ? mensaje: 'Realiza la jugada'}" class="form-control">
    <button class="btn btn-success">${(mensaje) ?  mensaje: 'enviar'}</button>
    </div>
    `
    return estructura;
  }
  function welcomeUser(name){
    if(user.name != ''){
    main.append(document.createElement('h1').textContent = `Bienvenido ${user.name}`);
  }else{
   main.append(document.createElement('h1').textContent = 'Es necesario que te registres')
  }
  }
