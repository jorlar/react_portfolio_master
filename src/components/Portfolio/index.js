import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../../firebase';

import "./index.scss";

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async() => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        console.log(querySnapshot)
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio =(portfolio) => {
        return(
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return(
                            <div className="image-box" key={idx}>
                                <img src={port.image}
                                className="portfolio-image"
                                alt="portfolio"/>
                                <div className='content'>
                                    <p className='title'>{port.name}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button 
                                    className='btn'
                                    onClick={() => window.open(port.url)}
                                    view> View
                                    </button>
                                </div>
                            </div>
                        )
                        })
                }
            </div>
        )
    }
    return (
        <>
    <div className="container portfolio-page">
        <h1 className="page-title"> 
        <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f','o','l','i','o']}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
    </div> 
    <Loader type="pacman"/>
    </>
    );
}

export default Portfolio;