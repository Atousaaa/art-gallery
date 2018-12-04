import React from 'react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import './Burger.css';
import BurgerItems from './BurgerItems';
import BurgerOption from './burgerOptions';
// import trackSomething from 'something'   example for stub test

const paperProps = {
    style: { maxHeight: 48 * 4.5, width: 200 }
};


//pass it to configuration file as json

class Burger extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        // trackSomething('string');   example for stub test
        this.setState({ anchorEl: event.currentTarget }); // is the element that event listener is attached to.
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    id='menue-burger'
                    aria-label="More"   //ARIA IS FLAG SPECIALLY FOR SCREEN READER (BLIND)
                    aria-owns={open ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MenuIcon className='burger-icon'/>
                </IconButton>
                <Menu
                    id='menue-burger'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={paperProps}
                >
                    <BurgerItems options={BurgerOption}/>

                </Menu>
            </div>
        )
    }
}

export default Burger;