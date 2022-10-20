import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import Contactme from "../data/contact"

const RedesSociales = () => {
  const { facebook, googleMaps, instagram, whatsapp } = Contactme
  return (
    <div className='bottomsocials'>
        <ul className="redes">
          <li className="social" >
            <a target='_blank' href={instagram}  > <FontAwesomeIcon icon={faInstagram} size="2x" className='sociales' id="instagram"/> </a>
          </li>
          <li className="social" >
            <a target='_blank' href={facebook} > <FontAwesomeIcon icon={faFacebook} size="2x" className='sociales' id="facebook"/> </a>
          </li>
          <li className="social" >
            <a target='_blank' href={whatsapp} > <FontAwesomeIcon icon={faWhatsapp} size="2x" className='sociales' id="whatsapp"/> </a>
          </li>
          <li className="social" >
            <a target='_blank' href={googleMaps} > <FontAwesomeIcon icon={faMapLocationDot} size="2x" className='sociales' id="maps"/> </a>
          </li>
        </ul>
    </div>

  )
}

export default RedesSociales