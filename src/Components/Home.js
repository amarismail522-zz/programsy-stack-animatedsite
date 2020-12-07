import React from 'react'
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';

// import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Service from './Service';
import Portfolio from './Portfolio';
import About from './About';

function Home() {
    return (
        <>
           <Navbar />
           <Banner />
           <Service />
           <Portfolio />
           <About />
        </>
    )
}

export default Home;
