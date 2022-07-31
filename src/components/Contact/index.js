import './index.scss'
import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import {MapContainer, Popup, TileLayer, Marker} from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  
  
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_7qmm9zi',
            'template_kwh8pnd',
            refForm.current,
            'OXYriWzwQ5CfA64mu'
        )
        .then(
            () => {
                alert('Melding sendt!')
                window.location.reload(false)
            },
            () => {
                alert('Kunne ikke sende skjema')
            }
        )
  }

    return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['K', 'o', 'n', 't', 'a', 'k', 't', ' ', 'm', 'e', 'g']}
              idx={15}
            />
          </h1>
          <p>
            Jeg er interesert i freelance prosjekter og muligheter - spesielt
            ambisiøse og store prosjekter. Men, om du har andre spørsmål eller
            prosjekter på gang, ikke nøl med å ta kontakt via skjemaet.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                <li className='half'>
                    <input type="text" name="name" placeholder='Name' required/>
                </li>
                <li className='half'>
                    <input type="email" name="email" placeholder='email' required/>
                </li>
                <li>
                    <input type="text" name="subject" placeholder='subject' required/>
                </li>
                <li>
                    <textarea placeholder='melding' name="message" required></textarea>
                </li>
                <li>
                    <input type="submit" className='flat-button' value="Send"></input>
                </li>
                </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
        Jørn Larsen, 
        <br />
        Norge,
        <br/>
        Rønsvegen 3,  <br/>
        2960 Røn <br/>
        <span>hei@jotun-utvikling.no</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[61.03762168528051, 9.055478567366551]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[61.03762168528051, 9.055478567366551]}>
                    <Popup>Jørn bor her, kom gjerne på kaffe :)</Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
