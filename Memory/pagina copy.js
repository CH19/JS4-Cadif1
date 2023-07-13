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
    modalStructure(contenido, mensajeButton){
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
}