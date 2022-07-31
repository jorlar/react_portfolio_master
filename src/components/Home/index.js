import React, {useEffect, useState} from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import './index.scss';
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['ø', 'r', 'n', ',']
    const jobArray = ['W','e','b',' ', 'D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>i,</span>
                <br/>
                <span className={`${letterClass} _14`}>Jeg </span>
                <span className={`${letterClass} _15`}> </span>
                <span className={`${letterClass} _16`}>er</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Utvikler / Javascript Ekspert / YouTuber</h2>
                <Link to="/contact" className="flat-button">Kontakt meg</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home;