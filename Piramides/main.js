// ySelector('body'
const divHijo = '<div class="cuadrado"></div>';
$('main').slideUp()
$('#ColocarPiramides').fadeOut();

$(function(){
    $('#buttonPiramide').click(function(){
    $('.inputContainer').fadeOut()
    if($('main').lenth > 1){
        $('main').remove('.contenedor');
    }    
        let numberSons = 2;
     for(let i = 1; i<= $('#inputPiramide').val(); i++){
               (i>1) ? numberSons = numberSons +=2: console.log();
                // console.log(divHijo.repeat(numberSons))
                $('main').append(`<div class="contenedor">${divHijo.repeat(numberSons)}</div>`)
     }
     $('main').slideDown(2000);
     $('#ColocarPiramides').fadeIn(1500);
    });
    $('#ColocarPiramides').click(function(){
        $('.inputContainer').fadeIn()

    });
})