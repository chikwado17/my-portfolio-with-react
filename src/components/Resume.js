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
                        <h2 className="resume_h2" style={{paddingTop:'2em',fontFamily:'Signika'}}> Nworie Chikwado E. </h2>
                        <h4 style={{color:"grey"}}>Software Developer</h4>
                        <hr style={{borderTop:"3px solid #833fb2",width:'50%'}}/>
                        <p className="software_p">I am an enthusiastic and teachable software developer with experience in a wide variety of software, system architecture and programming languages. My line of work has transformed me into a pragmatic, innovative and creative thinker who is adept at coming up with real-time and practical solutions that work for clients. I am always striving to stay updated with the latest developments in the software development world and also to improve on my personal development and leadership skills.</p>
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
                        schoolDescription={"Covenant Polytechnic Owerrinta, Abia State."}
                      />

                      <Education
                        startYear="2017"
                        endYear="2018"
                        schoolName="Higher National Diploma"
                        schoolDescription={"Abia State Polytechnic Aba, Abia state."}
                      />

                      <hr style={{borderTop:"3px solid #e22947"}}/>

                      <h2>Experience</h2>
                      <Experience 
                        startYear='2015'
                        endYear="2019"
                        jobName="ICT Staff Covenant Polytechnic."
                        jobDescription="Worked closely with the ICT team on computer laboratory maintenance and supervision And also the Centre chief technician for Jamb CBT exam and other computer-based tests / examination."
                      />

                      <Experience 
                        startYear='2017'
                        endYear="Present"
                        jobName="Web Developer At Rad5 Tech Hub."
                        jobDescription="Applied clean code practices and design patterns to develop readable, maintainable and scalable code for RAD5 Tech Hub projects. 

                        I oversees the web development team and also web Application development Bootcamp Instructor at RAD5 Tech Hub Aba."
                        
                      />

                      <Experience 
                        startYear='2019'
                        endYear="Present"
                        jobName="Facebook Educator On Safe Online Program."
                        jobDescription="Mentored young people on the need to key into online privacy and understand safe online practice."
                      />

                      <Experience 
                        startYear='Currently'
                        endYear=""
                        jobName="Software Developer & Instructor At Princess Shekinah Intenational School Owerri."
                        jobDescription="School Portal Administrator."
                      />

                      <hr style={{borderTop:"3px solid #e22947"}}/>

        

<h2>Volunteering Experience</h2>
<Experience 
  startYear='2017'
  endYear="Present"
  jobName="Rad5 Tech Hub."
  jobDescription="Wordpress and Scratch Instructor at TeenHack."
/>


<hr style={{borderTop:"3px solid #e22947"}}/>
                      <h2>Skills</h2>
                      <Skills 
                        skill="HTML5 / CSS3"
                        progress="80"
                      />

                        <Skills 
                        skill="BOOTSTRAP4"
                        progress="90"
                      />

                      <Skills 
                        skill="REACT SEMANTIC-UI"
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

                  <Skills 
                    skill="WORDPRESS"
                    progress="95"
                  />

                  <Skills 
                    skill="FIRESTORE"
                    progress="70"
                  />
                    </Cell>
               </Grid>
            </div>
         );
    }
}
 
export default Resume;