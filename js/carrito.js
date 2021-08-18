
let datosProducto = prompt ("Hola Bienvenido!! "+ "\n" +"\nEn esta sección encontrarás descuentos en barriles industriales(1),decorativos(2) y estibas(3)  \nPor favor marca el número del producto de tu interés )  ") ;
   
if (datosProducto == 1) {
   alert("15% OFF"); 
        descuentoBarril();
        
   }

   else if (datosProducto ==2) {
      alert("25% OFF");
      descuentoBarrilito();
   }

   else if (datosProducto ==3) {
      alert("10% OFF");
        descuentoEstibas();
   }



  
//Objeto Producto
class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    sumaIVA(){
        
        this.precio = this.precio * 1.21;
        
    }
    vender(){
        this.vendido = true;
    }
    visualizar(){
        console.log(this);
    }
}

const producto1 = new Producto("Barril Industrial", 15000);
const producto2 = new Producto("Barril Decorativo", 7000);
const producto3 = new Producto("Estibas", 25000);

producto1.sumaIVA();
producto1.vender();
producto1.visualizar();
producto2.visualizar();
producto2.sumaIVA();
producto2.visualizar();
producto2.vender();
producto3.visualizar();
producto3.vender();
producto3.visualizar();
producto3.sumaIVA();
producto3.visualizar();


//Objeto Barriles
class Barriles {
    constructor(uso,precio,color){
    this.uso = uso;
    this.precio = precio;
    this.color = color;
    this.vendido = true;
    }

    visualizar(){
        console.log(this);
    };
   

} 


const barril1 = new Barriles ('Industrial', 50000, 'wengue') ;
const barril2 = new Barriles ('Decorativo', 30000, 'castaño') ;
const barril3 = new Barriles ('Decorativo', 35000, 'caoba') ;

barril1.visualizar();
barril2.visualizar();
barril3.visualizar();
alert("Gracias por tu compra,estamos procesando tu pedido") ;



//Funciones (van al ppo)
function descuentoBarril() {
    let precioBarril = 20000 ;
    let descuentoBarril = precioBarril * 15/100;
    let precioPromoBarril= precioBarril - descuentoBarril;
    alert("El Barril Industrial te quedaría en : "+ precioPromoBarril +" " +"ars") ;
 } 
 
 
 
 function descuentoBarrilito() {
    let precioBarrilito = 27000 ;
    let descuentoBarrilito = precioBarrilito * 25/100;
    let precioPromoBarrilito= precioBarrilito - descuentoBarrilito;
    alert("El Barril Decorativo te quedaría en : "+ precioPromoBarrilito +" " + "ars") ;
 } 
 
 function descuentoEstibas() {
    let precioEstibas = 40000 ;
    let descuentoEstibas = precioEstibas * 10/100;
    let precioPromoEstibas= precioEstibas - descuentoEstibas;
    alert("El paquete de estibas te quedaría en : "+ precioPromoEstibas  +" " +"ars" + " " + "el paquete por 10") ;
 } 

 function sumaElementosCarrito (precioPromoBarril,precioPromoBarrilito,precioPromoEstibas) {
   var total = precioPromoBarril+precioPromoBarrilito+precioPromoEstibas ;
    console.log("Llevando los 3 productos te quedarían en: " + total +"ars");
    alert("Llevando los 3 productos te quedarían en: " + total +"ars");
     
 }
 sumaElementosCarrito (17000,20250,36000) ;

 /*
 function sumaElementosCarrito () {
    var total = a +b +c ;
    console.log("Llevando los 3 productos te quedarían en: " + total +"ars");
    alert("Llevando los 3 productos te quedarían en: " + total +"ars");
   //  console.log(sumaElementosCarrito());


 }

 sumaElementosCarrito (precioPromoBarril,precioPromoBarrilito,precioPromoEstibas) ;
 /*
 //Carritothi
 const addToShoppingButton 
 addToShoppingButton.array.forEach(addButton => {
    addButton('click', addToCartClicked);
    
 }); 

 function addToCartClicked () {
    const shoppingItemPrice =
    const shoppingQuantity =

    total = shoppingItemPrice + shoppingQuantity;

 }


//Sumar items que desea....cómo?
 function sumaElementosCarrito (precioPromoBarril,precioPromoBarrilito,precioPromoEstibas) {
    var total = a +b +c ;
    console.log("Llevando los 3 productos te quedarían en: " + total +"ars");
    alert("Llevando los 3 productos te quedarían en: " + total +"ars");
   //  console.log(sumaElementosCarrito());


 }

 sumaElementosCarrito () ;
 
/*
 class productosCol  {
     constructor (referencia,material,diseño,precio,lugarEnvio) { 
         this.referencia =referencia ;
         this.material = material;
         this.diseño = diseño ;
         this.precio = precio ;
         this.lugarEnvio = lugarEnvio;
     }

     visualizar () {
         console.log(this);
     }
 }

const barril1 = new Barriles ('Industrial', 50000, 'wengue') ;
const barril2 = new Barriles ('Decorativo', 30000, 'castaño') ;
const barril3 = new Barriles ('Decorativo', 35000, 'caoba') ;
const barril4 = new Barriles ('Decorativo', 35000, 'caoba') ;
const barril5 = new Barriles ('Decorativo', 35000, 'caoba') ;

barril1.visualizar();
barril2.visualizar();
barril3.visualizar();
barril4.visualizar();
barril5.visualizar();

//Función Seleccionar
function seleccionarItem () {
    alert("LISTA DE PRODUCTOS: \nBarril Industrial\nBarril Decorativo\nProductos Reciclados\nEstibas\Bar Decorativo");
    let seleccion = prompt ('Ingrese el nombre del producto que desea');

    while(seleccion != mercaderia[0].item) {
        alert('PRODUCTO INCORRECTO --> PRODUCTOS DISPONIBLES:\nBarril Industrial\nBarril Decorativo\nProductos Reciclados\nEstibas\Bar Decorativo');
        let seleccion = prompt ('Ingrese el nombre del producto que desea');
    }
    for (let i = 0; i <=mercaderia.length;i++) {
        if (mercaderia[0].item === seleccion ) {
            mercaderia.push (mercaderia.item)
        }
    }
}

console.log(seleccionarItem);


//Ordenar por precio (de menor a mayor)
let ordenadosPorMenorPrecio = [];
ordenadosPorMenorPrecio = productos.map(elemento => elemento);
ordenadosPorMenorPrecio = productos;
ordenadosPorMenorPrecio.sort(function(a,b) {
    return a.precio - b.precio;
});
document.write("<h2>Lista de productos ordenados por Precio Ascendente:</h2>")

for (const item of ordenadosPorMenorPrecio) {
    document.write(`<ul><li><h3>- ${item.categoria} ${item.codigoRaise}</h3></li><br>`);
    document.write(`<li><p>Número de referencia: ${item.referencia}</p></li><br>`);
    document.write(`<li><p>Material: ${item.material}</p></li><br>`);
    document.write(`<li><p>Aplica para máquina(s): ${item.modeloMaquina}</p></li><br>`);
    document.write(`<h4><p>$ ${item.precio} <i>(no incluye envío)</i></h4></li><br></ul>`);
};

// Por ejemplo, queremos ordenar un array de personas de mas joven a mas viejo

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrar(){
        return( this.nombre + " " + this.apellido + " - " + this.edad + " años" );
    }
}

const personas = []

const Persona1 = new Persona("Juan" , "Perez" , 45);
const Persona2 = new Persona("Sofia" , "Martinez" , 13);
const Persona3 = new Persona("Martin" , "Juarez" , 25);

personas.push(Persona1);
personas.push(Persona2);
personas.push(Persona3);


// teniendo en cuenta que personas es un array de objetos clase Persona


function ordenarEdad(){
        var ordenadosEdad = [];
        var index = 1;
        let stringOrdenado = "";
        ordenadosEdad = personas.map(elemento => elemento);
        var ordenadosEdad = personas;
        ordenadosEdad.sort(function(a,b){
            return a.edad - b.edad;
        });
        for(var elemento of ordenadosEdad){
            stringOrdenado = stringOrdenado + index + ": " + elemento.mostrar() + "\n";
            index++;
        }
        alert("Personas en orden ascendente por edad \n" + stringOrdenado);
    }

ordenarEdad();
*/