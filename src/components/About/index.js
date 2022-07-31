import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['O', 'm', ' ', 'm', 'e','g']}
            idx={15}
          />
        </h1>
        <p>
          Jeg er en veldig ambisiøs front-end utvikler på utkikk etter en 
          rolle i et etablert IT selskap med muligheter for å jobbe med 
          nyere teknologi og utfordrende prosjekter.
        </p>
        <p>
          Jeg er nysgjerrig av natur og jobber hele tiden med å forbedre
          måten jeg angriper nye oppgaver på, et problem av gangen.
        </p>
        <p>
          Hvis jeg skulle definert meg selv med en setning, ville det 
          blitt en familieperson, gymfanatikker og en person som trives best 
          utendørs, med en passion for dyr, foto og tech!!
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon ={faAngular} color="#dd0031" />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon ={faHtml5} color="#f06529" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon ={faCss3} color="#28a4d9" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon ={faReact} color="#5ed4f4" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon ={faJsSquare} color="#efd81d" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon ={faGitAlt} color="#ec4d28" />
            </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About;
