import React from 'react';
import TopBar from "./TopBar";
import connect from "react-redux/es/connect/connect";
import { setGalleries } from "../actions/GalleriesAction";
import PropTypes from "prop-types";

import './GalleryDetails.css';

class GalleryDetails extends React.Component{

    render(){
        const title = this.props.match.params.title;
        console.log("inside GALLERY DETAILS",this.props.photoData)
        return(
            <div>
                <header className="gallery-header">
                     <TopBar/>
                     <div className="detail-title">
                       <h1>"{title}" Gallery Details</h1>
                     </div>
                 </header>
                <div className="first-box">
                    <div>
                        <img  className="photo-detail"/>
                    </div>
                    <div className="short-desc">
                        <p>Gallery Title : {this.props.photoData.title}</p>
                        <p>Artist : {this.props.photoData.artist}</p>
                        <p>Date : {this.props.photoData.date}</p>
                        <p>City : {this.props.photoData.city}</p>
                        <p>Rating : {this.props.photoData.rating}</p>
                    </div>
                </div>
                <div className="description-box">
                    <p>Description : {this.props.photoData.description}</p>
                </div>

                </div>

        )
    }
}

GalleryDetails.defaultProps = {
    photoData: {}
}

GalleryDetails.propTypes = {
    photoData: PropTypes.object,
    title: PropTypes.string
}

function mapStateToProps(state,title) {


    // function findPhoto(galleries,name){
    //     return galleries.title === name
    // }
    //
    // console.log("title is ",title.match.params.title)
    // console.log("state an",state.galleriesData);
    // const name = title.match.params.title;
    // const galleries = state.galleriesData;
    // console.log("inside MAPSTATE and galleries is",galleries);
    // galleries.find()
    //
    // return {  }


    const photoName = title.match.params.title;
    const galleriesList = state.galleriesData;

    console.log("data from state that you want it",findPhoto(photoName));

    function findPhoto(photoName) {
        return galleriesList.find(function (element) {
            return element.title = photoName;
        })
    }


    return { photoData: findPhoto(photoName) }

};

// export default GalleryDetails;


export default connect(
    mapStateToProps
)(GalleryDetails)
