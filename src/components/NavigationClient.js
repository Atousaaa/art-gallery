import React from "react";
import {Link} from "react-router-dom";
import './NavigationClient.css';
import PropTypes from "prop-types";
// import { NavLink } from 'react-router-dom';

class NavigationClient extends React.Component{

 isActive (label){

     return label === this.props.path ?'active' : ''
 }

    render(){

        return(

            <div className="navigation-box">

                <Link to="/Album/landscape" label="landscape" className={`link-box ${this.isActive('landscape')}`} >landscape</Link>
                <Link to="/Album/portrait" label="portrait" className={`link-box ${this.isActive('portrait')}`}>portrait</Link>
                <Link to="/Album/figure" label="figure" className={`link-box ${this.isActive('figure')}`}>figure</Link>
                <Link to="/Album/illustration" label="illustration" className={`link-box ${this.isActive('illustration')}`}>illustration</Link>

            </div>

        )
    }
}

NavigationClient.propTypes = {
    path: PropTypes.string
}

export default NavigationClient;