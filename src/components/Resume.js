import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import img from '../images/img3.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <Grid>
                    <Cell col={4}> 
                        <div style={{textAlign:"center"}}>
                            <img src={img} alt="img" style={{width:'127px',borderRadius:'10px'}}/>
                        </div>
                        <h2 style={{paddingTop:'2em',fontFamily:'Anton'}}> Okoye Chikwado </h2>
                        <h4 style={{color:"grey"}}>Programmer</h4>
                        <hr style={{borderTop:"3px solid #833fb2",width:'50%'}}/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, excepturi ducimus fuga sunt cupiditate magni provident sed eos similique et iste beatae ullam voluptatum, tempora consequatur illo, debitis praesentium nesciunt!</p>
                        <hr style={{borderTop:"3px solid #833fb2",width:'50%'}}/>
                          <h5>Address</h5>
                            <p>Office: RAD5 TECh HUB</p>
                            <cite>No: 7 Factory Road Aba</cite>
                            <h5>Email</h5>
                            <p>Chikwadonworie@gmail.com</p>
                            <hr style={{borderTop:"3px solid #833fb2",width:'50%'}}/>
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                      <h2>Education</h2>
                      <Education
                        startYear="2014"
                        endYear="2015"
                        schoolName="National Diploma"
                        schoolDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed."}
                      />

                      <Education
                        startYear="2017"
                        endYear="2018"
                        schoolName="Higher National Diploma"
                        schoolDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed."}
                      />

                      <hr style={{borderTop:"3px solid #e22947"}}/>

                      <h2>Experience</h2>
                      <Experience 
                        startYear='2009'
                        endYear="2018"
                        jobName="ICT Staff Covenant Polytechnic"
                        jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed."
                      />

                      <Experience 
                        startYear='2009'
                        endYear="2018"
                        jobName="Web Developer At Rad5 Tech Hub"
                        jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed."
                      />

                      <hr style={{borderTop:"3px solid #e22947"}}/>
                      <h2>Skills</h2>
                      <Skills 
                        skill="HTML / CSS"
                        progress="80"
                      />

                        <Skills 
                        skill="BOOTSTRAP"
                        progress="90"
                      />

                      <Skills 
                      skill="JAVASCRIPT"
                      progress="60"
                    />

                    <Skills 
                    skill="REACT"
                    progress="45"
                  />
                    </Cell>
               </Grid>
            </div>
         );
    }
}
 
export default Resume;