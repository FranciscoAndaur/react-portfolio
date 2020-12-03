import React from 'react';

import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';

const Home = (props) => {
    
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel/>
        </div>
    )
}
export default Home;