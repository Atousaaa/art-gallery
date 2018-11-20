import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";


import './MediaCard.css';
import IconButton from "@material-ui/core/IconButton/IconButton";


class MediaCard extends Component {

    // handleClick = event => {
    //     // this.setState({anchorEl: event.currentTarget});
    // };

    render() {
    const gallery = this.props.gallery;
        return (
            <div className="mediaCard">

                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                            className="media"
                            image={gallery.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subheading" component="h2">
                                {gallery.title}
                            </Typography>
                            <Typography component="p">
                                {gallery.shortDescription}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        {/*<IconButton className="delete_button" aria-label="Delete">*/}
                            {/*<DeleteIcon />*/}
                        {/*</IconButton>*/}
                        <NavLink to={`/artists/${this.props.gallery.artist}`}>
                            <Button  size="small" color="primary">
                                {this.props.gallery.artist}
                            </Button>
                        </NavLink>

                        <NavLink to={`/Galleries/${this.props.gallery.title}`}>
                            <Button  size="small" color="primary">
                                Learn More
                            </Button>
                        </NavLink>

                    </CardActions>
                </Card>
            </div>
        );
    }
}


MediaCard.propTypes = {
    gallery: PropTypes.object
};

export default MediaCard;



