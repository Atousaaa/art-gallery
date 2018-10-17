import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './MediaCard.css';
import Sorting from './Sorting.css';

class MediaCard extends Component {

    render() {
    const galleries = this.props.galleries;
        return (
            <div id-="mediaCard">

                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                            className="media"
                            image={galleries.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subheading" component="h2">
                                {galleries.title}
                            </Typography>
                            <Typography component="p">
                                {galleries.description}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}


MediaCard.propTypes = {
    galleries: PropTypes.object
};

export default MediaCard;
