import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

const About = (props) => {
    
    return(
        <div>
            <Hero title={props.title} />

                <Content>
                <p>Hello, my name is Francisco.  I'm a full-stack software engineer with experience in <strong>Ruby, Ruby on Rails, Javascript, and React</strong>. My dream is to live in a cabin in the mountains, but for now, I reside in the Bronx.</p> 

                <p>After completing a six-month intensive code camp at Flatiron School I've realized that I am passionate about making human connections through technology. Currently learning and gaining more experience with <strong>React Native, Python, Javascript, CSS, and SQL</strong>.</p>

                <p>My latest project, Dev Dream, is a dream log for people. You can check it out <a href="https://github.com/FranciscoAndaur/DevDream" target="_blank" rel="noopener noreferrer">here</a> , or on the homepage. It is built with <strong>React, Redux, and Grommet.io</strong>.  However, I will be rebuilding it as a mobile app using Redux in the following months.</p>

                <p>When I'm not learning something new, I'm probably running or cycling around this wonderful city.</p>
                </Content>
            
        </div>
    )
}
export default About;