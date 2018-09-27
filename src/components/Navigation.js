import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Navigation.css';


const styles = {
    root: {
        width: 500,
    },
};


class Navigation extends React.Component{
    
    handleChange = (event, value) => {
       window.location.replace(`/Album/${value}`)
    };


    render(){

        const { classes } = this.props;

        return(

        <BottomNavigation
                    onChange={this.handleChange}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="Landscape" value={'landscape'}/>
                    <BottomNavigationAction label="Portrait" value={'portrait'} />
                    <BottomNavigationAction label="Illustration" value={'illustration'} />
                    <BottomNavigationAction label="Figure"  value={'figure'} />

          </BottomNavigation>
        )
    }
}


Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    log: PropTypes.func
};

export default withStyles(styles)(Navigation);;