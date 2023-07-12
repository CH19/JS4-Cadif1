class Pagina{
    constructor(){

    }
    //Funcion de cuando exista un registro
    Registro(){

    }
    createForm(comunicador, inputType, mensaje){
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
     
      createJugada(mensaje){
        const estructura = `
        <div>
        <input type="text" placeholder="${(mensaje) ? mensaje: 'Realiza la jugada'}" class="form-control">
        <button class="btn btn-success">${(mensaje) ?  mensaje: 'enviar'}</button>
        </div>
        `
        return estructura;
    }
}