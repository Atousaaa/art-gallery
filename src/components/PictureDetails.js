import React from 'react';
import './PictureDetails.css';
import TopBar from "./TopBar";
import connect from "react-redux/es/connect/connect";
import './PictureDetails.css';
import PropTypes from "prop-types";
import { fetchJSON } from "../lib/requests";
import Review from './Review';
// import { recieveCategory } from "../actions/categoryActions";
import { showDetails } from '../actions/pictureDetailsAction';
import pictureDetails from "../stores/pictureDetails";

class PictureDetails extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         pictureDetails: {
    //             title: '',
    //             image: ''
    //         }
    //     };
    // }

    // fetchDetails() {
    //     const category = this.props.match.params.category
    //     const name = this.props.match.params.name
    //     fetchJSON(`/api/detail/${category.toLowerCase()}/${name}`)
    //         .then(pictureDetails => this.setState({ pictureDetails }))
    // }

    fetchDetails() {
        const category = this.props.match.params.category
        const name = this.props.match.params.name
        fetchJSON(`/api/detail/${category.toLowerCase()}/${name}`)
            .then(response => this.props.dispatchPhotos({
                photoDetails:response,
                category,
                name
                }))
    }

    componentDidMount() {
        //
        // if(this.props.photoDetails.length > 0) {
        //     console.log("photo details and state is full",this.state,this.props.photoDetails);
            this.fetchDetails(this.props.match.params.category, this.props.match.params.name);
        // }
        // else if (this.props.photoDetails.length <= 0){
        //     console.log("photoDetails is empty bcs you refresh it",this.props.photoDetails);
        // }
    }

    render() {
        console.log('testingg', this.props.photoDetails)

        const { title, image, author, year, publisher, description } = this.props.photoDetails;
        return (
            <div>
                <header className="gallery-header">
                    <TopBar/>
                    <div className="detail-title">
                        <h1>{this.props.photoDetails.name} Details</h1>
                    </div>
                </header>
                <div className="first-box">
                    <div>
                        <img src={`${image}`} className="photo-detail" alt="scream"/>
                    </div>
                    <div className="short-desc">
                        <p>Photo Name : {this.props.photoDetails.name}</p>
                        <p>{`Author : ${author}`}</p>
                        <p>{`Year : ${year}`}</p>
                        <p>{`Publisher : ${publisher}`}</p>
                    </div>
                </div>
                <div className="second-box">
                    <p>{`Description : ${description}`}</p>
                </div>
                <Review category={this.props.match.params.category} title={this.props.match.params.name } />
            </div>
        )
    }
}

PictureDetails.defaultProps = {
  // pictureDetails: {}
    photoDetails: []
}

PictureDetails.propTypes = {
  // pictureDetails: PropTypes.object
    photoDetails: PropTypes.array,
    dispatchPhotos: PropTypes.func
}


const mapStateToProps = (state) => {
    // console.log("?????picture", state.photoDetails.photoDetails)
    // const pictureDetails = state.categories[category].find(({ title }) => title === name);
    console.log(';the statw is...', state)
        const photoDetails = state.photoDetails.photoDetails;
    const test = 1;
    return {
        photoDetails,
        test
    }
};


// export default PictureDetails;

export default connect(
    mapStateToProps,
    { dispatchPhotos: showDetails }
)(PictureDetails)


// export default PictureDetails;
//
// document.getElementById("reviewForm").addEventListener("submit",function(event)
// {
//    event.preventDefault();
//    console.log(event.target.elements["input1"].value)
//  })

// const mapStateToProps = (state, { photoName }) => ( {
//     pictureDetails: state.categories[ photoName ]
// } );
//
