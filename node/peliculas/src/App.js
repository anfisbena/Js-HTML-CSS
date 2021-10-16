import { useEffect, useState } from 'react';
import './App.css';
import Paginacion from './Paginacion';
import PageWrapper from './pageWrapp';
import Pelicula from './pelicula';


function App() {
//setea la pagina a cambiar, por default es la 1
  const [paginaActual, setPaginaActual] = useState(1);
//creo un array que me permite cargar la informacion de las peliculas
  const [peliculas,setPeliculas]= useState([]);
//genera un total de peliculas a mostrar por pagina
  const TOTAL_POR_PAGINA = 7;
//cuando se llaman una de las funciones de arriba tipo set, se renderiza toda la pagina, lo que va a hacer este useEffect es aprovechar y cargar los items de set
//seleccionados cuando se cargue 'peliculas' tal cual se expresó abajo
  useEffect(()=>{
    buscarPeliculas();
  },[]);
//buscarPelicula manda un request al servidor para obtener un archivo Json con la informacion
  const buscarPeliculas = async ()=>{
    let url ='https://lucasmoy.dev/data/react/peliculas.json';
    //fetch es una funcion promesa, es decir que no carga en tiempo real, sin embargo se espera recibir una respuesta
    var respuesta = await fetch(url,{
      'method': 'GET',
      //este mode se usa cuando la peticion se está haciendo a servidores externos. 
      'mode': 'no-cors',
      'headers':{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    //esta variable trae el json, tambien es asincronica
    let json=await respuesta.json();
    setPeliculas(json);
  };
  const cargarPeliculas = () => {
//Slice lo que hace es devolver los valores, en este caso devuelve pagina actual * total de items a mostrar por pagina
  //   peliculas = peliculas.slice(
  //     (paginaActual - 1) * TOTAL_POR_PAGINA,
  //     paginaActual * TOTAL_POR_PAGINA
  //   );
   }
// Devuelve cantidad total de peliculas y calcula el total a mostrar por pagina
  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  return (
    <PageWrapper>
      <button onClick={buscarPeliculas}></button>
      {peliculas.map(pelicula =>
        <Pelicula 
			titulo={pelicula.titulo} 
			calificacion={pelicula.calificacion}
          	director={pelicula.director} 
			actores={pelicula.actores} 
			fecha={pelicula.fecha} 
			duracion={pelicula.duracion}
          	img={pelicula.img}>
          	{pelicula.descripcion}
        </Pelicula>)}
        {/*Esto lo que hace es cambiar la pagina*/}
      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;