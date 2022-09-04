$(document).ready(function (){
    $("button").click(function(){
        $.get("data.json", function(datos){
            if($("#info").is(":empty")){
                $.each(datos, function(_index, obj){
                alert (obj.nombre + ' '+ obj.apellido);
                });
            }
        });
    });
});