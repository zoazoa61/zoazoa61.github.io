import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import mypic from '../profile.png';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext1}</p>
                    <p>{data.abouttext2}</p>
                    <p>{data.abouttext3}</p>
            </Fade>
            </div>
            <img src={mypic} alt="my profile" />

        </div>  );
    }
}
 
export default About;