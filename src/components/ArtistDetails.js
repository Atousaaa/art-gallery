import React from 'react';
import './ArtistDetails.css';
import TopBar from "./TopBar";
import { fetchJSON } from "../lib/requests";
import { connect } from "react-redux";
import { setArtistDetails } from "../actions/artistDetailsAction";
import PropTypes from "prop-types";



class ArtistDetails extends React.Component{

    fetchArtistDetails = () => {
        const name = this.props.match.params.name;
        fetchJSON(`/api/artists/${name.toLowerCase()}`)
            .then(response => this.props.dispatchArtist({
                artistData : response
            }))
    }

    componentDidMount() {
            this.fetchArtistDetails();
        }


    render(){
        console.log("properties of artist", this.props.match.params.name);
        console.log("artist from mapstate", this.props.artistData);

        return(
            <div>

                <header className="gallery-header">
                    <TopBar/>
                    <div className="detail-title">
                        <h1>{this.props.artist}Artist  Details</h1>
                    </div>
                </header>
                <div className="details">
                    <img src={this.props.artistData.image} className="photo-detail" alt="artistPhoto"/>
                    <p>full name : {this.props.artistData.name}{this.props.artistData.surname}</p>
                    <p>birthYear : {this.props.artistData.birthYear}</p>
                    <p>birthPlace : {this.props.artistData.birthPlace}</p>
                    <p>description : {this.props.artistData.description}</p>
                    <p>lastExhibition : {this.props.artistData.lastExhibition}</p>

                </div>
            </div>
        )
    }
}
ArtistDetails.defaultProps = {
    artistData : {}
}

ArtistDetails.propTypes = {
    artist: PropTypes.string,
    artistData: PropTypes.object
}


function mapStateToProps(state) {
    console.log("inside MAPSTATETOPROPS",state.artistData);
    return {artistData : state.artistData }
};

// export default ArtistDetails;

export default connect(
    mapStateToProps,
    {dispatchArtist: setArtistDetails }
)(ArtistDetails)


