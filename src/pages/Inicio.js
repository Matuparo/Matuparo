import React from 'react'
import Menu from '../components/menu'
import Typed from "react-typed"
import RedesSociales from '../components/RedesSociales'
import GaleriaCarousel from '../components/carousel'
import Footer from '../components/Footer'

const Inicio = () => {
  return (<div>
   
    <div className='welcome'>
      <div id="bunner-welcome">
        <h1 className> <strong>
          <Typed
            strings={["En Matuparo puedes encontrar buen servicio", "En Matuparo puedes encontrar calidad", "En Matuparo puedes encontrar comodidad", "En Matuparo puedes encontrar variedad gastronomica"]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={10}
            loop
            smartBackspace
          />
        </strong>
        </h1>
      </div>
    </div >
    <div className='container'>
      
      <section className='components' id="galeria">
        <center>
          <div className='spacetitle'>
            <h1 className='title'><strong>Galeria</strong></h1>
          </div>
          <GaleriaCarousel />
        </center>
      </section>

      <section className='components'>
        <center>
          <div className='spacetitle' id="contacto">
            <h1 className='title'> <strong>Ubicación</strong> </h1>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.363062252141!2d-72.89516186721873!3d4.878712257034463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad3f65740c1b7%3A0x79b72b8c2255312e!2sMatuparo%20Comida%20Rapidas!5e0!3m2!1ses-419!2sco!4v1664470306279!5m2!1ses-419!2sco" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </center>
      </section>
    </div>
  </div >
  )
}

export default Inicio