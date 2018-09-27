import React from 'react';
import './Circle.css';
import {Link} from "react-router-dom";

// export const OptionType = PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired
// });

class Circle extends React.Component {

    render() {
        const { imgUrl,name } = this.props;
        return (
            <span className="circle"  style={{backgroundImage: 'url("'+imgUrl+'")'}}>
                <Link className="circle-link" to={`/Album/${this.props.name}`}>{name}</Link>
            </span>
        )
    }
}

export default Circle;


