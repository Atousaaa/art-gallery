import React from 'react';
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import PropTypes from 'prop-types';

export const OptionType = PropTypes.shape({
     name: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired
});


class BurgerItems extends React.Component {

    render() {
        const { options } = this.props;

        return (
            options.map(item => (
                    <MenuItem key={item.name}>
                        <Link to={item.link}>
                            {item.name}
                        </Link>
                    </MenuItem>
                )
            )
        )
    }
}

 BurgerItems.propTypes = {
     options: PropTypes.arrayOf(OptionType).isRequired
};

export default BurgerItems;