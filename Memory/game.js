'Use strict'
// Requerimientos del juego 1 

// 1.- Declare una clase llamada Usuario con un metodo constructor en ella. Establezca los siguientes atributos o propiedades: nombre, correo, status, score, tipoDeUsuario.

// 2.- Declare una clase llamada Juego con un metodo constructor en ella. Establezca los siguientes atributos o propiedades: tipoDeJuego, nombre, nroDeNiveles, nroDeJugadores

// 3.- En la clase Usuario el metodo constructor debe requerir por parametros los valores para inicializar los atributos de la clase. Con excepcion del atributo "score"

// 4.- En la clase Juego el metodo constructor debe requerir por parametros los valores para inicializar los atributos de la clase.

// 5.- En la clase Usuario crear metodos para:
// -inicializar el atributo "score", el valor inicial debe ser recibido por parametro.
// -otro metodo para setear el atributo "score" este metodo debe recibir por parametros el score actual, la operacion a realizar (sumar, restar, multiplicar o dividir) y el valor en cuestion Este metodo debe retornar (return) el nuevo valor del "score". EJ: updateScore(score, operacion, value){ }

class User
{
    constructor(name, email,password, status,userType){
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.userType = userType;
        this.score = 0;
    }
    setScore(scoreActual){
        this.score = scoreActual;
    }
    updateScore(score, op, val){
        if (op == 'sumar'){
            score =+ val;
        }
        if (op == 'restar'){
            score =- val;
        }
        if (op == 'multiplicar'){
            score = score * val;
        }
        if (op == 'dividir'){
            score = score / val;
        }
        this.score = score;
        return score;
    }
}
class Game
{
    constructor(tipoDeJuego, nombre, nroDeNiveles, nroDeJugadores){
        this.tipoDeJuego = tipoDeJuego;
        this.nombre = nombre;
        this.nroDeNiveles = nroDeNiveles;
        this.nroDeJugadores = nroDeJugadores;
    }
}
// Desafio 2 
// 1.- Establezca en la maqueta, el header tres botones, uno para "inicio de sesion" otro para "registro" y otro para "cerrar sesion". Tanto el boton de "inicio de sesion" como el de "registro" deben invocar un modal con un formulario acorde a su funcion.

// 2.- Dado el arreglo de usuarios en formato JSON programe que desde el formulario de inicio de sesion se valide el username y el password indicado en cada objeto, verificar que existe dicho username y si es el caso entonces guardar en una variable auxiliar el objeto de dicho usuario para luego validar la contraseña.

// 3.- Si el usuario se ha autenticado correctamente guarde su informacion en el localStorage bajo el nombre (key) "usuarioLogueado".

// 4.- Programe que si el usuario se ha logueado correctamente el boton de "inicio de sesion" y el boton de "registro" se deben ocultar y se debe mostrar el boton de "cerrar sesion". Ademas al hacer click en el boton "cerrar sesion" se debe eliminar el registro del localStorage de "usuarioLogueado" e inmmediatamente ocultar el boton de"cerrar sesion" para mostrar nuevamente a los botones de "inicio de sesion" y "registro".

// 5.- Prgramar que un usuario pueda registrar y sus datos se almacenen en el localStorage, ademas de agregarse al arreglo de "usuarios" suministrado. Si el usuario se registro en la sesion anterior al volver a abrir la pagina este debe agregarse automaticamente al arreglo de usuarios, de forma tal qjue al consultar el arreglo de usuarios, éste se vea reflejado de ultimo en dicho arreglo. (se toma como premisa que un usuario recien registrado antes de cerrar la página NO cierra su sesion).
header = document.querySelector('header');
const pagina = new Pagina();
const user1 = new User('','','','');
const namePlayer = Object.keys(user1);
let sesionExistente = false;
const IniciarSesionEstructura = `
  <form id="signInForm">
  ${pagina.createForm(`${namePlayer[0]}Sesion`, 'text', 'Introduce tu nombre de usuario')}
  ${pagina.createForm(`${namePlayer[2]}Sesion`, 'text', 'Introduce tu contrasenna')}
  
  <button type="submit" id="sendSetion" class="btn btn-primary">Submit</button>
  
  </form>
  `;
  const formestrucutra = `
  <form id="formu1">
  ${pagina.createForm(namePlayer[0],'text','Introduce tú nombre')}
  ${pagina.createForm(namePlayer[1], 'email','Ten cuidado colocando tu mail')}
  ${pagina.createForm(namePlayer[2], 'text','Introduce tu contrasenna' )}
  <div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" id="sendButton" class="btn btn-primary">Submit</button>
  </form>
  `;
  const closeSesion = `
  <button type="submit" id="closeSesion" class="btn btn-danger">Close Sesion</button>
  ` 
$(header).addClass('container d-flex flex-row justify-content-aorund w-100');
$(header).append(`<div id="SignInContainer">${pagina.modalStructure(IniciarSesionEstructura, 'SignIn')}</div>`);
$(header).append(closeSesion);
$('#closeSesion').addClass('d-none');
$(header).prepend(`<div id="RegisterContainer">${pagina.modalStructure(formestrucutra, 'Registrarse')}</div>`);

window.addEventListener('load', ()=>{
    document.getElementById('signInForm').addEventListener('submit', (event)=>{
        event.preventDefault();
        verificarLogueo(document.getElementById(`${Object.keys(user1)[0]}SesionInput`).value, usuarios, 'username');
    })
})
function verificarLogueo(value, data, dataSearch){
    console.log('Verificar logueo funcionando!!');
    //Se busca en el json si hay una informacion del value buscado que puede ser el value de un input o otro valor, el parametro datasearch es para el atributo json del objeto y comparar su existencia
    let ubicado = data.find(e => e[dataSearch] == value)
    console.log(ubicado);
    if(!ubicado){
        alert(`${dataSearch} no encontrado`);
    }else{
        validarContrasenna($(`#${Object.keys(user1)[2]}SesionInput`).val(), ubicado, 'id');
        //Probando convertir un JSON a String
      //  ubicadoString = JSON.stringify(ubicado);
      // probando LocalStroage 
      localStorage.setItem('usuarioLogueado',JSON.stringify(ubicado))
      console.log(JSON.parse(localStorage.getItem('usuarioLogueado')));
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
      sesionExistente = true;
      registro()
    }
  }
  
        function registro(){
            // $(header).append(pagina.modalStructure(IniciarSesionEstructura, 'SignIn'));
            // $(header).append(closeSesion);
            if(sesionExistente){
                $('#closeSesion').removeClass('d-none');
                // $('#SignInContainer').remove();
                // $('#RegisterContainer').remove();
                $('#SignInContainer').addClass('d-none');
                $('#RegisterContainer').addClass('d-none');

            }
            $('#closeSesion').click(function(){
                $('#closeSesion').addClass('d-none');
                $('#SignInContainer').removeClass('d-none');
                $('#RegisterContainer').removeClass('d-none');

            })
        }