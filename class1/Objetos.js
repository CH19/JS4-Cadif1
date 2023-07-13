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
let users;
 fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{ users = json; console.log(users);});
;
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

 
//Pagina

let IniciarSesionEstructura = `
  <form id="signInForm">
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
$(header).append(pagina.modalStructure(IniciarSesionEstructura, 'SignIn'));
$(header).append(pagina.modalStructure(formestrucutra, 'Registrarse'));

// Funcion para crear los elementos del formulario de control de manera reusable 
// Se prueba el vlaue del formulario para ver si se almacena y se muestra 


// Logica

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
//Se coloca esto poque de otra forma el dom no reconoce el formulario con el Sid signInForm
window.addEventListener('load', ()=>{
//Se utiliza el event listener para cargar el evento y utilizar la informacion para validarla y decir que esta en el json
  document.getElementById('signInForm')?.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log($(`#${Object.keys(user)[0]}SesionInput`).val());
    verificarLogueo($(`#${Object.keys(user)[0]}SesionInput`).val(), users, 'username')

  });
})
  
  // Main 
  main.innerHTML = `

  ${pagina.createJugada()}
  `

  function welcomeUser(name){
    if(name != ''){
    main.append(document.createElement('h1').textContent = `Bienvenido ${name}`);
  }else{
   main.append(document.createElement('h1').textContent = 'Es necesario que te registres')
  }
  }
 function verificarLogueo(value, data, dataSearch){
  console.log('Verificar logueo funcionando!!');
  //Se busca en el json si hay una informacion del value buscado que puede ser el value de un input o otro valor, el parametro datasearch es para el atributo json del objeto y comparar su existencia
  let ubicado = data.find(e => e[dataSearch] == value)
  if(!ubicado){
    alert(`${dataSearch} no encontrado`);
  }else{
    validarContrasenna($(`#${Object.keys(user)[2]}SesionInput`).val(), ubicado, 'id');
    //Probando convertir un JSON a String
    //  ubicadoString = JSON.stringify(ubicado);
    // probando LocalStroage 
    localStorage.setItem('serActivate',JSON.stringify(ubicado))
    console.log(JSON.parse(localStorage.getItem('serActivate')));
   //con try y catch nos aseguramos de que si sucede un error en el codigo, el programa no se rompa
    try{
      console.log(JSON.parse(ubicadoString));

    }catch{
      console.log('errror');
    }
  }
  
 }
function validarContrasenna(value, data, dataSearch){
  console.log(data[dataSearch]);
  if((value != data[dataSearch])){
    alert(`${dataSearch} inexistente o incorrecto`)
  }else{
    console.log('Info correcta');
  }
}
