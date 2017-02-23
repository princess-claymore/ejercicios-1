
function enviar(){
var nombre=document.getElementById('nombre').value;
var apellido=document.getElementById('apellido').value;
var dni=document.getElementById('dni').value;
var dir=document.getElementById('direccion').value;
var res= "nombre:" + nombre + "<br> <br>" + "apellido" + apellido + "<br><br>" + "dni:" + dni + "<br> <br>" + "direccion:" + dir;
var resultado=document.getElementById("datos");

  if(nombre!="" && apellido !="" && dni !="" && dir !="" ){

    resultado.innerHTML=res;
  }


}
