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
                        <h2>Okoye Chikwado</h2>
                        <img src={img} alt="avatar" style={{height:'250px',opacity:'.8',borderRadius:'10px'}}/>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>For your project you can contact me!</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'32px',fontFamily:'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"></i>
                                (+234) 81 025 522 91
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                https://twitter.com/ChikwadoOkoye1
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                Chikwadonworie@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                                <i className="fa fa-address-card" aria-hidden="true"></i>
                                 7 Factory Road Aba
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