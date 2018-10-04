import React from 'react';
import './PictureDetails.css';
import TopBar from "./TopBar";
import './PictureDetails.css';
import PropTypes from "prop-types";
import { fetchJSON } from "../lib/requests";
import Review from './Review';

class PictureDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictureDetails: {}
        };
    }

    fetchDetails() {
        const category = this.props.match.params.category
        const name = this.props.match.params.name
        fetchJSON(`/api/detail/${category.toLowerCase()}/${name}`)
            .then(pictureDetails => this.setState({ pictureDetails }))
    }

    componentDidMount() {
        this.fetchDetails();
    }

    render() {
        const { title, image, author, year, publisher, description } = this.state.pictureDetails;
        return (
            <div>
                <header className="gallery-header">
                    <TopBar/>
                    <div className="detail-title">
                        <h1>{title} Details</h1>
                    </div>
                </header>
                <div className="first-box">
                    <div>
                        <img src={`${image}`} className="photo-detail" alt="scream"/>
                    </div>
                    <div className="short-desc">
                        <p>Photo Name : {title}</p>
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
  pictureDetails: {}
}

PictureDetails.propTypes = {
  pictureDetails: PropTypes.object
}

export default PictureDetails;


//
// document.getElementById("reviewForm").addEventListener("submit",function(event)
// {
//    event.preventDefault();
//    console.log(event.target.elements["input1"].value)
//  })


// const mapStateToProps = (state, { photoName }) => ( {
//     pictureDetails: state.categories[ photoName ]
// } );

// const mapStateToProps = (state, { match: { params: { category, name } }}) => {
//     const pictureDetails = state.categories[category].find(({ title }) => title === name);
//
//     return {
//         pictureDetails
//     }
// };

// export default PictureDetails;

// export default connect(
//
//     mapStateToProps
//
// )(PictureDetails)




