'use strict';
$(function(){
// Practice of objetct creating class one 
let player = new Object();
player.name = '';
player.email = '';
player.password = '';
player.phone = '';
const namePlayer = Object.keys(player);
//Arreglo para obtener los Strings de los valores del formulario
const valueForms = []
const header = document.querySelector('header');
header.classList.add('d-flex')
header.classList.add('justify-content-around')
header.classList.add('h-50');
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
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1200px-Google_Play_Arrow_logo.svg.png" style="width: fit-content; height: 200px;" alt="">
</figure>
<button type="button" class="btn btn-primary rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
`
// console.log(valueForms)
// Funcion para crear los elementos del formulario de control de manera reusable 
function createForm(comunicador, inputType, mensaje){
  // player = {comunicador: ''};
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
// Se prueba el vlaue del formulario para ver si se almacena y se muestra 
  $('#sendButton').click(function(event){
    event.preventDefault();
    valueForms.forEach(value=>{
      player[value] = $(`#${value}Input`).val()
    })
    console.log(player);
    console.log();
  });
  // valueForms.forEach(function(value){
  //   console.log('hola ' + value)
  // })

})