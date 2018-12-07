import React, { Component } from 'react';
import {Tabs, Tab, Grid, Card, CardTitle, CardActions, Button,CardMenu,IconButton, CardText } from 'react-mdl';
import reactImg from '../images/react.png';
import html1 from '../images/html1.jpg';
import html2 from '../images/html2.png';
import html3 from '../images/html3.jpg';
import boot1 from '../images/boot1.png';
import boot2 from '../images/boot2.jpg';
import boot3 from '../images/boot3.jpg';
import word1 from '../images/word1.png';
import word2 from '../images/word2.png';
import word3 from '../images/word3.jpg';
import 'bootstrap/dist/css/bootstrap.css';


class Projects extends Component {
   constructor(props){
       super(props);
       this.state = {
           activeTab:3
       }
   }

//Method for changing the tabs with content
   toggleCategories = () => {
        if(this.state.activeTab === 3){
            return (
                <div style={{margin:'5px 5px'}} className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+reactImg+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+reactImg+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>
                
                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+reactImg+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>
                   </div> 
                </div>
            );

        }else if(this.state.activeTab === 2){

            return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+word1+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+word2+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+word3+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }else if(this.state.activeTab === 1){

            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+boot1+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+boot2+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                                <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+boot3+')',backgroundSize:'100%' }}>
                                    React project #1
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                                <CardMenu style={{color:'#fff'}}>
                                    <IconButton name="share">
                                    </IconButton>
                                </CardMenu>
                            </Card>
                        </div>
                     </div>
                </div>
            );
        }else{
            return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                            <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+html2+')',backgroundSize:'100%' }}>
                                React project #1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share">
                                </IconButton>
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                            <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+html3+')',backgroundSize:'100%' }}>
                                React project #1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share">
                                </IconButton>
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card shadow={5} style={{width:'412px',margin:'auto'}}>
                            <CardTitle  style={{color:'#fff',height:'175px',backgroundImage: 'url('+html1+')',backgroundSize:'100%' }}>
                                React project #1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate ipsum maxime et accusamus labore officiis, distinctio itaque fugiat vel aliquam quae fugit aperiam. Voluptatum in quam unde provident sed.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share">
                                </IconButton>
                            </CardMenu>
                        </Card>
                    </div> 
                </div> 
            </div>
            );
        }
   }


    render() { 
        return ( 
            <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>BOOTSTRAP</Tab>
                    <Tab>WORDPRESS</Tab>
                    <Tab>REACT</Tab>    
               </Tabs>

                <Grid className="container-fluid">
                    <div className="container-fluid">
                            {/* calling the method  */}
                        {this.toggleCategories()}
                    </div>
                </Grid>
            </div>    
         );
    }
}
 
export default Projects;



