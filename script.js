//funcion que aplica el estilo a la opcion seleccionada y quita la previamente seleccionada
function seleccionar(link){
let opciones = document.querySelectorAll('#links a');
	opciones[0].className = "";
	opciones[1].className = "";
	opciones[2].className = "";
	opciones[3].className = "";
	opciones[4].className = "";
	link.className = "seleccionado";
//Desaparece el menu una vez que se ha seleccionado una opcion en el modo responsive
	let x = document.getElementById("nav");
	x.className = "";

}
//funcion que muestra el menu responsive
function responsiveMenu(){
	let x = document.getElementById("nav");
	if(x.className===""){
		x.className = "responsive";
	}else{
		x.className = "";
	}
}

//detecto scrolling y aplica animacion de la barra de actividades
window.onscroll = function(){
efectoHabilidades()
};

//funcion que aplica la animacion
function efectoHabilidades(){
let skills = document.getElementById("habilidades");
let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	if(distancia_skills >= 300){
	document.getElementById("html").classList.add("barra-progreso1");
	document.getElementById("js").classList.add("barra-progreso2");
	document.getElementById("bd").classList.add("barra-progreso3");
	document.getElementById("ps").classList.add("barra-progreso4");
	}
}


