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

class GalleryGridlist extends React.Component {


    FetchGalleries = () => {
        fetchJSON('/api/galleries')
            .then(response => this.props.dispatchGalleries(response))
            .catch(error => "Please Try again :)")
    }

    componentDidMount() {
        if ( this.props.galleriesList.length === 0 ) {
        // if (!Array.isArray(this.props.galleriesList) || ( this.props.galleriesList.length === 0 )) {
            console.log("length of galleryList", this.props.galleriesList.length);
            this.FetchGalleries();
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
                    { galleriesList.map( p =>
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


