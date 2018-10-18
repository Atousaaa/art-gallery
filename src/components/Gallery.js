import React from 'react';

import GalleryGridlist from './GalleryGridlist';

import './Gallery.css';
import TopBar from "./TopBar";

class Gallery extends React.Component{
    render(){
        return(
            <div>
                <header className="about-header">
                    <div className="menu-class">
                        <TopBar/>
                    </div>
                    <span className="about-text">
                        <h1 className="title-gallery">Upcoming Galleries</h1>
                    </span>
                </header>
                <div>
                    <GalleryGridlist/>
                </div>
            </div>
        )
    }
}


export default Gallery;