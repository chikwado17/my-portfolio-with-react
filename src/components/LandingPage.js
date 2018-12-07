import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import myImg from '../images/img3.jpg';


class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width:'100%', margin:'auto',top:'20px'}} >   
                <Grid className="landing-grid">
                    <Cell col={12}>
                     <img src={myImg} className="avatar-img" alt="myimage"/>

                     <div className="banner-text">
                        <h1>Full Stack JavaScript Developer</h1>

                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | ReactJS</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/chikwado-okoye-b8a958152/" rel="noopener noreferrer" target="_blank" >
                                 <i class="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.facebook.com/chikwado.okoye.52" rel="noopener noreferrer" target="_blank" >
                                 <i class="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://twitter.com/ChikwadoOkoye1" rel="noopener noreferrer" target="_blank" >
                                 <i class="fa fa-twitter-square"></i>
                            </a>
                            <a href="https://github.com/chikwado17" rel="noopener noreferrer" target="_blank" >
                                 <i class="fa fa-github-square"></i>
                            </a>
                        </div>
                     </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Landing;