import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import img from '../images/img3.jpg';


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nworie Chikwado E.</h2>
                        <img src={img} alt="avatar" style={{height:'250px',opacity:'.8',borderRadius:'10px'}}/>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em',fontSize:'16px'}}>For your project you can contact me!</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent>
                                <i className="fa fa-phone-square" aria-hidden="true"> <span style={{fontSize:'28px',fontFamily:'Signika',fontWeight:'700'}}>(+234) 81 025 522 91</span></i>
                                
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent>
                                <i className="fa fa-twitter-square" aria-hidden="true"> <span style={{fontSize:'28px',fontFamily:'Signika',fontWeight:'700'}}>twitter.com/ChikwadoOkoye1</span></i>
                                
                                
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent>
                                <i className="fa fa-envelope" aria-hidden="true"> <span style={{fontSize:'28px',fontFamily:'Signika',fontWeight:'700'}}>Chikwadonworie@gmail.com</span>
                                </i>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent>
                                <i className="fa fa-address-card" aria-hidden="true"> <span style={{fontSize:'28px',fontFamily:'Signika',fontWeight:'700'}}>7 Factory Road Aba</span>
                                </i>
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
               </Grid>
            </div>
         );
    }
}
 
export default Contact;