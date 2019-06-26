class Producto {
//1) CONSTRUCTOR 

constuctor(n,p,s,d) {
	this.nombre= n
	this.precio= p
	this.stock= s
	this.disponible= d

}

// 2) Metodos de Instancia
Mostrar(neto){
	let ficha = document.createElement("ul")
	let contenido = `
	  					<li>Nombre: ${this.nombre} </li>
	  					<li>Precio:  ARS ${neto ? this.precio : this.precioBruto}</li> 
	  					<li>Stock: ${this.stock} </li>
	  					<li>disponible: ${this.disponible ? "SI" : "NO"}` 

ficha.innerHTML=contenido
document.body.appendChild (ficha)
		  				
}

precioBruto(){
     let precioSinIva= (this.precio/1.21).toFixed(2)
	return(precioSinIva)

}
}





// 3) Metodos de nstancia

//////////////////////
 let objProducto = new Producto ("Te Tilo", 55, 2323,false)
 let objProductoII = new Producto ("Submarino", 67.55,10,true)
 let objProductoIII= new Producto ("Lemon Pie", 21, 499,true)
