
//Obtener el campo de la pelicula que ingresa el usuario
let buttonsearch = document.getElementById("search")
buttonsearch.addEventListener("click", () => {

//Obtener el valor de movie que escriba el usuario
let moviename = document.getElementById("moviename").value;
   //Si el campo esta vacio, le lanzamos una alerta al usuario
   if (moviename === ""){
      alert("Debe ingresar una pelicula")
   } 
   //Si el campo no esta vacio, se prosigue a la llamada del api
   else{
    
      //Api key para usar la api
      const apikey = `https://www.omdbapi.com/?i=tt3896198&apikey=a45b44b2&s=${moviename}`

      //Realizar el fetch y llamar el api
      const peticion = fetch(apikey);
      peticion.then( resp => {
      resp.json().then ( data => {
      
      //Se establece la variable num, la cual se iterara para obtener diferente informacion
      let num = 0
      //Se recorren la pelicula que escribio el usuario para encontrar posibles resultados
      for ( i = 0; i < data.Search.length; i++){
          
          //Source de la imagen,titulo y fecha  de la pelicula
          let src = data.Search[num].Poster
          let textmovie = data.Search[num].Title
          let date = data.Search[num].Year
    
          //Crear el contenedor que almacena la informacion
          let containerdiv = document.createElement("div")
             containerdiv.classList.add("containermovies")
          
          //Crear la imagen y asignarle el source y darle estilos
          let imagen = document.createElement("img")
             imagen.classList.add("img-movie")
             imagen.style.width = "213px"
             imagen.style.height = "323px"
             imagen.style.borderRadius = "5px"
             imagen.src = src
          
          //Crear el h1 que almacena el nombre de la pelicula
          let peliculaname = document.createElement("h1")
             peliculaname.classList.add("moviename")
             peliculaname.innerHTML = textmovie
          
          //Crear el p que almacena la fecha de la pelicula
          let peliculadate = document.createElement("p")
             peliculadate.classList.add("date-movie")
             peliculadate.innerText = date
          
          //Asignar elementos al dom
          let navcontainer = document.getElementById("sub-nav")
          containerdiv.append(peliculaname)
          containerdiv.append(peliculadate)
          containerdiv.append(imagen)
          navcontainer.append(containerdiv)
          
          //Se aumenta en uno num , para iterar una pelicula distinta
          num = num + 1
        }
           
           
    })
  })
    
 }
})



