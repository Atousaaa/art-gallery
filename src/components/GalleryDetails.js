import React from 'react';
import TopBar from "./TopBar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {isEmpty} from 'ramda';

import { setGalleryDetails } from '../actions/GalleriesAction';
import './GalleryDetails.css';
import { fetchJSON } from "../lib/requests";

export class GalleryDetails extends React.Component{


    // fetchGalleryDetails = () => {
    //    const title = this.props.match.params.title;
    //     fetchJSON(`/api/galleries/${title}`)
    //         .then(response => this.props.dispatchGalleryDetails({
    //             photoData : response
    //         }))
    // }


    fetchGalleryDetails =async () => {
        console.log("inside fetch");
        const title = this.props.match.params.title;
        console.log("title is",title);

        const response = await fetchJSON(`/api/galleries/${title}`);
        console.log("response",response)

        return this.props.dispatchGalleryDetails({
            photoData : response
        })
    }


    // componentDidMount() {
    //     const photoData = this.props.photoData;
    //
    //     if (isEmpty(photoData)){
    //         this.fetchGalleryDetails();
    //     }
    // }


    async componentDidMount() {
        const photoData = this.props.photoData;
        console.log("photo data",photoData);
        if (isEmpty(photoData)){
            console.log("is empty")
            return await this.fetchGalleryDetails();
        }
        console.log("photo data is not empty")
        return false;
    }

    render(){
        const title = this.props.match.params.title;
        console.log("inside GALLERY DETAILS",this.props.photoData.title)
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
                        <img src={this.props.photoData.image} className="photo-detail" alt="galleryPhoto"/>
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
    title: PropTypes.string,
    dispatchGalleryDetails: PropTypes.func
}

function mapStateToProps(state,title) {

    if ( state.galleriesData.length > 0) {

        const photoName = title.match.params.title;
        const galleriesList = state.galleriesData;

        function findPhoto(photoName) {
            return galleriesList.find(function (element) {
                return element.title = photoName;
            })
        }
        return { photoData: findPhoto(photoName) }

    }else{

        //viktor fixed


        // const { photoData } = state.galleryDetails
        //
        // return {
        //     photoData: state.galleryDetails.photoData
        // }
        //
        //instead of above lines write bellow line


       return { photoData: state.galleryDetails.photoData}
    }

};

export default connect(
    mapStateToProps,
    {dispatchGalleryDetails: setGalleryDetails }
)(GalleryDetails)
