import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapLocationDot, faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import contact from '../data/contact'

const Footer = () => {
    const {facebook, googleMaps, instagram, whatsapp}=contact
    return (

        <footer>
            <div>
                <div>
                    <ul>
                        <li><a id="facebook" href={facebook} target="_blank"><FontAwesomeIcon icon={faFacebook}  size="3x"/></a></li>
                        <li><a id="instagram" href={instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x"/></a></li>
                        <li><a id="whatsapp" href={whatsapp} target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="3x"/></a></li>
                        <li><a id="maps" href={googleMaps} target="_blank"><FontAwesomeIcon icon={faMapLocationDot} size="3x"/></a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link className='nav-link' href='/menu'><strong>Menú</strong></Link></li>
                        <li><a className='nav-link' href='/#galeria'><strong>Galeria</strong></a></li>
                    </ul>
                </div>
                <div>
                    <a className="nav-link"href="https://api.whatsapp.com/send?phone=573108854737&text=hola%20"><strong>Dev. Michael Forero</strong></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer