import React from 'react';
import Burger from "./Burger";
import './TopBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/Home';

class TopBar extends React.Component {

    handleChange = (event, value) => {
        window.location.replace('/')
    };

    render() {
        return (
            <div className="app-bar">
                <AppBar>
                    <Toolbar>
                        <Burger/>
                        <div>
                            <IconButton onClick={this.handleChange} >
                                <AccountCircle className="home-icon" />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default TopBar;


//for testing
// const tree = about.find('.app-bar').find(AppBar).find(Toolbar);
// expect(tree.find(Burger).exists()).toBe(true);
// expect(tree.find(IconButton).()).toBe(true);