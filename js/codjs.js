var parrafos= document.body.getElementsByClassName("tip");
var ptotal= parrafos.length

for( var i=0;i<ptotal;i++)
{ parrafos[i].style.color = "red" 
 parrafos[i].style.fontSize= "20px"
}


function calcular(){
		
	var productovalue= document.getElementById('lista1').value;
	var cantidadvalue=document.getElementById('lista2').value;

	if( productovalue=="Tortas"){
		    document.getElementById("lista1").style.color="blue"
            var preciototal= cantidadvalue*300
		    if(cantidadvalue>15){
		    	preciototal=preciototal*0.95
		    }
		document.getElementById("PrecioporMayor").style.fontSize="28px"
		document.getElementById("PrecioporMayor").style.color="#011447"    
		document.getElementById("PrecioporMayor").innerHTML=preciototal



	}else if( productovalue=="Alfajores"){

		    document.getElementById("lista1").style.color="red"
			var preciototal= cantidadvalue*10
			if(cantidadvalue>15){
		    	preciototal=preciototal*0.95
		    }	
		document.getElementById("PrecioporMayor").innerHTML=preciototal	
	}


}


var parrafos= document.body.getElementsByClassName("formulario");
var ptotal= parrafos.length

for( var i=0;i<ptotal;i++)
{ parrafos[i].style.color = "#d90000" 
 parrafos[i].style.fontSize= "22px"
 parrafos[i].style.fontWeight= "bold"
}


function iniciar(){
  const nombre=document.getElementById("nombre")
  const apellido=document.getElementById("apellido")
  const email=document.getElementById("email")
  nombre.addEventListener("input", validacion, false)
  apellido.addEventListener("input", validacion, false)
  fecha.addEventListener("input", validacion, false)
  validacion()

}

function validacion(){
  if(nombre.value==''){
    nombre.setCustomValidity('Complete su nombre');
    nombre.style.background='#FFDDDD';
  }else{
    nombre.setCustomValidity('');
    nombre.style.background='#FFFFFF';
  }

  if(apellido.value==''){
    apellido.setCustomValidity('Complete su apellido')
    apellido.style.background='#FFDDDD'
  }else{
    apellido.setCustomValidity('')
    apellido.style.background='#FFFFFF'
  }
  }

  window.addEventListener("load", iniciar, false);




$(function() {

 
  var width = 720;
  var animationSpeed = 1000;
  var pause = 2000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $('.slides', $slider);
  var $slides = $('.slide', $slider);

  var interval;

  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({
        'margin-left': '-=' + width
      }, animationSpeed, function() {
        if (++currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  $slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider);

  startSlider();


});

document.getElementById("parrafo").style.fontSize="19px"
document.getElementById("parrafo").style.color="#011447"
document.getElementById("parrafo").style.fontFamily="verdana,sans-serif";

