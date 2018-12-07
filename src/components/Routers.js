import React from 'react';
import Landing from './LandingPage';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import {Switch, Route } from 'react-router-dom';


const Routers = () => {
    return ( 
        <Switch>
            <Route path="/" component={Landing} exact={true}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
     );
}
 
export default Routers;