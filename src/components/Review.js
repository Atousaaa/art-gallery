import React from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import { recieveReview } from "../actions/reviewActions";
import './Review.css';

class Review extends React.Component{

    handleSubmit= (event) => {
        event.preventDefault();
        console.log("event is ....", event.target.input1.value);
        console.log("username is ....", event.target.username.value);
        this.props.dispatchReview({
            category: this.props.category,
            title: this.props.title,
            text: event.target.input1.value,
            username: event.target.username.value
        })
    }

    render(){
        console.log("category is",this.props.category);
        console.log("title is",this.props.title);
        return(
            <div className="review-box">
                <form name="reviewForm" id="reviewForm" onSubmit={this.handleSubmit}>
                    <p>Your Name : </p>
                    <input id="username" type="text" name="username"/>
                    <p>Your Review : </p>
                    <input id="input1" type="text" name="input1"/>
                    <input className="submit-btn" type="submit" value="Submit review"/>
                    <div className="review-area">
                        <p>All Reviews :</p>
                        <p >{this.props.reviews[0]}</p>
                    </div>
                </form>
            </div>
        )
    }
}

Review.defaultProps = {
    reviews: []
}

Review.propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    reviews:PropTypes.array,
    dispatchReview: PropTypes.func
}

const mapStateToProps = (state, {category, title }) => ( {

    reviews: state.reviews[category.toLowerCase(),title.toLowerCase() ]

} );

//
// const mapDispatchToProps = {
//     dispatchReview: recieveReview
// }

export default connect(
    mapStateToProps,
    {dispatchReview: recieveReview}
)(Review)
