var resultado = $('#resultado');


$('.btn-primary').click(function(){
    resultado.fadeOut('fast');
})

$('.btn-danger').click(function(){
    resultado.fadeIn('fast')
})

$('.btn-warning').click(function(){
    resultado.toggle(1000)
})