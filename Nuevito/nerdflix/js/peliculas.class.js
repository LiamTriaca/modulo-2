class pelicula {
	
	constructor (t,e,d,p,tr){
	this.titulo= t
	this.estreno= e
	this.descripcion= d
	this.poster= p
	this.trailer= tr
	}
    
    Mostrar(){
    	//1) Capturamos el elemento
    	let elemento= document.querySelector(".pelicula").cloneNode(true)
    	
        //2)Reemplazamos datos

    	elemento.querySelector("h4").innerText= this.titulo
    	elemento.querySelector("p").innerText=this.estreno
    	elemento.querySelector("img").src=this.poster

    	//3)Ocultar elemento
    	elemento.classList.remove("hide")s

    	//4) Anexar elementos

    	document.querySelector("#peliculas").appendChild(elemento)

    	console.log(elemento)

    	
    }

}
let unaPelicula= new pelicula ("Iron Man", "2008", "Hombre de Hierro", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M3eXDEiqUg3_5HB2WU5iKJld4-lKYgUd20ZzLoTpalJamrsq", "https://www.youtube.com/watch?v=hDtJ-KXLngY")
let otraPelicula= new pelicula ("Captain America: Civil War", "2016", "War between Captain America & Iron Man", "https://cloud10.todocoleccion.online/cine-posters-carteles/tc/2018/09/30/16/134915750.jpg"," https://www.youtube.com/watch?v=xnv__ogkt0M")