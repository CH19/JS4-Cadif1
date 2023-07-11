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
    constructor(name, email, status,userType){
        this.name = name;
        this.email = email;
        this.status = status;
        this.userType = userType;
        this.score = 0;
    }
    setScore(scoreActual){
        this.score = scoreActual;
    }
    updateScore(score, op, val){
        if (op == 'sumar'){
            score = score + val;
        }
        if (op == 'restar'){
            score = score - val;
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