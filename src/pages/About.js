import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

const About = (props) => {
    
    return(
        <div>
            <Hero title={props.title} />

                <Content>
                Hello, my name is Francisco.  I'm a full-stack software engineer with experience in Ruby, Ruby on Rails, Javascript, and React.

My dream is to live in a cabin in the mountains, but for now, I reside in the Bronx. 

After completing a six-month intensive code camp at Flatiron School I've realized that I am passionate about making human connections through technology.  

Currently learning and gaining more experience with React, Python, Javascript, CSS, and SQL.

My latest project, Dev Dream, is a dream log for people. You can check it out here, or on the homepage. It is built with React, Redux, and Grommet.io.  However, I will be rebuilding it as a mobile app using Redux in the following months.

When I'm not learning something new, I'm probably running or cycling around this wonderful city.
                </Content>
            
        </div>
    )
}
export default About;