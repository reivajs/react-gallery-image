import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Titulo from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import Descripcion from './components/Descripcion'

function App() {
  return (
    <div className="App">
      <Titulo titulo="Galería de Imágenes con React" />
      <hr></hr>
      <Descripcion texto="¿Qué felinos habitan nuestro país? " />
      <Card src="https://i0.wp.com/laderasur.com/wp-content/uploads/2018/05/puma.jpg?ssl=1" titulo="Puma" descripcion="El principal carnivoro terreste Chileno" />
      <Card src="https://imagenes.elpais.com/resizer/ke__W4WfwsYmdyriVIECHjObuMQ=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OJWS4K6IHUKHVYF7XDS2W2IAEU.jpg" titulo="Gato montes Andino" descripcion="Es considerado el felino mas hermoso de Chile" />
      <Card src="https://chileestuyo.cl/wp-content/uploads/2021/11/gato-colocolo.jpg" titulo="Gato Colo Colo" descripcion="Felino muy pequeño que mide entre 52 y 70 cm ." />
      <Footer />
    </div>

  )
}

export default App;
