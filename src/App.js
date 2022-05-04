// console.log('ponton')
// window.addEventListener('load', obtenerDatos);
// function obtenerDatos (){
//   const NasaApi='4W7AZz3gHqqglByQUaWcEHUXTPYAdizX4datfahX';
//   const ruta=  `https://api.nasa.gov/planetary/apod? api_key=${NasaApi}`;
 
 
//   fetch(ruta)
//   .then(response=> response.JSON())
//   .then(resultado => mostrarDatos(resultado))
//   .catch(error=> console.log('eror +++: ', error))
// }

// function mostrarDatos({date, explanation}) {

//   const titulo = document.querySelector('#titulo');
// }


import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';

function obtenerDatos (){
  const NasaApi='4W7AZz3gHqqglByQUaWcEHUXTPYAdizX4datfahX';
  const ruta=  `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${NasaApi}`;
 
 
  fetch(ruta)
  .then(response=> response.JSON())
  .then(data=> console.log('los datos:', data))
  .catch(error=> console.log('eror +++: ', error))


}

function App() {
  
  const NasaApi='4W7AZz3gHqqglByQUaWcEHUXTPYAdizX4datfahX';
  const ruta=  `https://api.nasa.gov/planetary/apod? api_key=${NasaApi}`;
 

  

  const fetchCharter =()=>{
    fetch(ruta)
  .then(response=> response)
  .then(data=> console.log('los datos: *', data))
  .catch(error=> console.log('eror ++5+0: ', error))

  };

  useEffect(()=> {
    fetchCharter();

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to ponton.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
