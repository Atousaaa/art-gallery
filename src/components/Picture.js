import React, {Component} from 'react';
import './Picture.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Picture.css';
import PropTypes from 'prop-types';

export const CardType = PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired

});


class Picture extends Component {


    render() {

        const {details} = this.props;
        return (
            <Card className="card" key={details.title} >

                <CardActionArea className="photo-move" >
                    <CardMedia
                        className="media"
                        image={details.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {details.title}
                        </Typography>
                        <Typography component="p">
                            {details.year}
                            {details.description}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        )
    }
}

Picture.propTypes = {
    details: CardType.isRequired
};

export default Picture;

