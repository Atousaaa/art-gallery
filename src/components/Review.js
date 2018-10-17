import React from 'react';
// import R from 'ramda';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import { recieveReview } from "../actions/reviewActions";
import { setReviews } from "../actions/setReviewsAction";
import './Review.css';
import { fetchJSON } from "../lib/requests";

class Review extends React.Component{

    fetchSetReviews(category, title) {
        fetchJSON(`/api/reviews/${category.toLowerCase()}/${title}`)
            .then(response => this.props.dispatchReviews({
                reviews: response,
                category,
                title
            }))
    }

    componentDidMount() {
        this.fetchSetReviews(this.props.category, this.props.title);
    }

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
        console.log("review",this.props.reviews);
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
                        {this.props.reviews.map((review, index) => <div key={index}>{review.name} : {review.review}</div>)}
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
    text: PropTypes.string,
    reviews:PropTypes.array,
    showReviews: PropTypes.array,
    dispatchReview: PropTypes.func,
    dispatchSetReviews: PropTypes.func
}

const mapStateToProps = (state, {category, title }) => {
    const reviews = state.reviews[category.toLowerCase()] && state.reviews[category.toLowerCase()][title.toLowerCase()] ? state.reviews[category.toLowerCase()][title.toLowerCase()] : []

    return {
        reviews
    }
}

//
// const mapDispatchToProps = {
//     dispatchReview: recieveReview
// }

export default connect(
    mapStateToProps,
    {dispatchReview: recieveReview, dispatchReviews: setReviews}
)(Review)
