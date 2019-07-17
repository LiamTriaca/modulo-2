class Pelicula {
	
	constructor (i, t,e,d,p,tr){
	this.ID= i
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
        //3) Generar comportamiento reproductor mediante un closure
        elemento.querySelector("a").onclick= ()=>{
            console.log(this)
            //A PARTIR DE ESTE PUNTO NUESTRO THIS ES LA PE LI CU LA QUE ELIJAMOS 
    

        let reproductor= document.querySelector("#playMovie")

        console.log(reproductor)
        reproductor.querySelector("#titulo").innerText=`${this.titulo} ${this.estreno}`
        reproductor.querySelector("#descripcion").innerText=this.descripcion
        reproductor.querySelector("#imagen").src=this.poster
        reproductor.querySelector("iframe").src=this.trailer

        }


    	//4)Ocultar elemento
    	elemento.classList.remove("hide")

    	//5) Anexar elementos

    	document.querySelector("#peliculas").appendChild(elemento)

    	console.log(elemento)

    	
    }

  
    static parse (data){
        console.log ("Ahora deberia convertir Object en Producto")
        data= JSON.parse (data)
        if (data instanceof Array){
           /*Vieja Forma 
           let peliculas = new Array()
            data.forEach(item=> {
                let pelicula = new pelicula(
                item.idPelicula,
                item.Titulo,
                item.Estreno,
                item.Descripcion,
                item.Poster,
                item.Trailer
            )
            }
            peliculas.push(pelicula)
        })
            return peliculas
    }
    */


//Nueva forma 
         return data.map(item=>
          new Pelicula (
                item.idPelicula,
                item.Titulo,
                item.Estreno,
                item.Descripcion,
                item.Poster,
                item.Trailer
        )    
        )
        } else if ( data instanceof Object) {
            let peliculas = new Pelicula
                data.idPelicula,
                data.Titulo,
                data.Estreno,
                data.Descripcion,
                data.Poster,
                data.Trailer
         }
return peliculas

} else(){
    return null
}
}
