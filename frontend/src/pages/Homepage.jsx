import React from 'react';
import '../App.css';
import Feature from '../components/featured';
import SubscribeSection from '../components/footbar';
import Carousel from '../components/middle';

export default function Homepage() {
    return (
        <div className="App overflow-visible">
            {/* <Appbar /> */}
            <Carousel />
            <Feature />
            <SubscribeSection/>
        </div>
    )
}
