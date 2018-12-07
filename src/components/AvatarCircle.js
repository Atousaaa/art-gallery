import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import './AvatarCircle.css';




class AvatarCircle extends React.Component{

    render(){
        console.log(this.props.imgUrl);
        const { imgUrl } = this.props;

        return(
                <Avatar alt="avi" src={imgUrl} className="avatar">
                    <div>"LANDSCAPE"</div>
                </Avatar>
        )

    }
}

AvatarCircle.propTypes = {
    imgUrl : PropTypes.isRequired
};


export default AvatarCircle;
