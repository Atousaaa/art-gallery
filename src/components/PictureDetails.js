import React from 'react';
import './PictureDetails.css';
import TopBar from "./TopBar";
import './PictureDetails.css';
import {fetchJSON} from "../lib/requests";

class PictureDetails extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    fetchDetails() {

        console.log("propssss",this.props)
        const category =this.props.match.params.category
        const name =this.props.match.params.name
        fetchJSON(`/api/detail/${category.toLowerCase()}/${name}`)

            .then(response => this.setState({data:response}))
    }


    componentDidMount() {
        this.fetchDetails();
    }
    //
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.name !== nextProps.name) {
    //         this.fetchDetails(nextProps.name)
    //     }
    // }

    render() {

        const photoName = this.props.match.params.name;
        return(
            <div>
                <header className="gallery-header">
                        <TopBar/>
                    <div className="detail-title">
                        <h1>{photoName} Details</h1>
                    </div>
                </header>
                <div className="first-box">
                    <div>
                        <img src={`${this.state.data.image}`} className="photo-detail" alt="scream"/>
                    </div>
                    <div className="short-desc">
                        <p>Photo Name : {photoName}</p>
                        <p>{`Author : ${this.state.data.author}`}</p>
                        <p>{`Year : ${this.state.data.year}`}</p>
                        <p>{`Publisher : ${this.state.data.publisher}`}</p>
                    </div>
                </div>
                <div className="second-box">
                    <p>{`Description : ${this.state.data.description}`}</p>
                </div>
            </div>
        )
    }
}


export default PictureDetails;






