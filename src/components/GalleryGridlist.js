import React from 'react';
import GridListComponent from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";

import { fetchJSON } from "../lib/requests";
import PropTypes from "prop-types";
import { setGalleries } from "../actions/GalleriesAction";
import { connect } from 'react-redux';
import './GalleryGridlist.css';


import MediaCard from "./MediaCard";
import Sorting from "./Sorting";

export class GalleryGridlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
    }

    // FetchGalleries = () => {
    //     fetchJSON('/api/galleries')
    //         .then(response => this.props.dispatchGalleries(response))
    //         .catch(error => "Please Try again :)")
    // }

// I will change the fetch for test

    FetchGalleries = async () => {
        try {
            const response = await fetchJSON('/api/galleries')
            return this.props.dispatchGalleries(response)
        }
        catch (error) {
            this.setState({ error: true });
        }
///        this.setState({ [ event.target.name ]: event.target.value });
        // .catch(error => "Please Try again :)")
    }

    // componentDidMount() {
    //     if ( this.props.galleriesList.length === 0 ) {
    //     // if (!Array.isArray(this.props.galleriesList) || ( this.props.galleriesList.length === 0 )) {
    //         console.log("length of galleryList", this.props.galleriesList.length);
    //         this.FetchGalleries();
    //     }
    // }

    async componentDidMount() {
        if (this.props.galleriesList.length === 0) {
            // if (!Array.isArray(this.props.galleriesList) || ( this.props.galleriesList.length === 0 )) {
            console.log("length of galleryList", this.props.galleriesList.length);
            return await this.FetchGalleries();
        }
    }


    render() {
        const { galleriesList } = this.props;

        return (
            <div>
                <div className="sorting">
                    <Sorting/>
                </div>
                <GridListComponent cellHeight={"auto"} className="gridList" cols={3}>
                    {this.state.error ? <h1>this is error</h1> :
                        galleriesList.map(p =>
                            // Array.isArray(galleriesList) && galleriesList.map(p =>
                            <GridListTile key={p.id}>
                                <MediaCard gallery={p}/>
                            </GridListTile>)
                    }

                </GridListComponent>
            </div>
        )

    }
}

GalleryGridlist.defaultProps = {
    galleriesList: []
}

GalleryGridlist.propTypes = {
    dispatchGalleries: PropTypes.func,
    galleriesList: PropTypes.array
}

function mapStateToProps(state) {
    console.log("INSIDE MAP STATE TO PROPS", state.galleriesData);
    return { galleriesList: state.galleriesData }

};

export default connect(
    mapStateToProps,
    { dispatchGalleries: setGalleries }
)(GalleryGridlist)


//for using js inside the html write code inside brackets { .... }