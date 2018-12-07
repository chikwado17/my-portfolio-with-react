import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Routers from './components/Routers';
import { NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<NavLink style={{textDecoration:'none',color:'white'}} to="/">Portfolio</NavLink>}     scroll>
            <Navigation>
                <NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink>
                <NavLink activeClassName="is-active" to="/resume">Resume</NavLink>
                <NavLink activeClassName="is-active" to="/projects">Projects</NavLink>
                <NavLink activeClassName="is-active" to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title={<NavLink to="/" style={{textDecoration:'none',color:'black'}}>Portfolio</NavLink>}>
            <Navigation>
                <NavLink activeClassName="is-active" to="/">Home</NavLink>
                <NavLink activeClassName="is-active" to="/resume">Resume</NavLink>
                <NavLink activeClassName="is-active" to="/projects">Projects</NavLink>
                <NavLink activeClassName="is-active" to="/contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routers/>
        </Content>
    </Layout>
</div>
    );
  }
}


export default App;




