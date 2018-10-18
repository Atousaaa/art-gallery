import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { sortGalleries } from '../actions/GalleriesAction';

import './Sorting.css';

class Sorting extends React.Component {
    state = {
        alphabet: '',
        open: false,
    };

    handleChange = event => {
        console.log("CHANGE HANDLE CLICKED", event.target.value);
        this.setState({ [ event.target.name ]: event.target.value });
        this.props.dispatchSorting(event.target.value);

    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {

        return (
            <form autoComplete="off">
                <Button className="button" onClick={this.handleOpen}>
                    Open the select
                </Button>
                <FormControl className="formControl">
                    <InputLabel htmlFor="demo-controlled-open-select">sorting</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.alphabet}
                        onChange={this.handleChange}
                        inputProps={{
                            name: "sorting",
                            id: "demo-controlled-open-select"
                        }}
                    >

                        <MenuItem value="rating">Rating</MenuItem>
                        <MenuItem value="alphabet">Alphabet</MenuItem>
                        <MenuItem value="date">Date</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

//todo: map state to props is useless should be discarded from code


Sorting.propTypes = {
    dispatchSorting: PropTypes.func
};

export default connect(
    null,
    { dispatchSorting: sortGalleries }
)(Sorting)
