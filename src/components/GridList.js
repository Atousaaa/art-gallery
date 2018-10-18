import React from 'react';
import { recieveCategory } from '../actions/categoryActions';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import './GridList.css';
import GridListComponent from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Picture from "./Picture";
import { fetchJSON } from "../lib/requests";
import { NavLink } from 'react-router-dom';

class GridList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    fetchCategory = (category) => {
        fetchJSON(`/api/topic/${category.toLowerCase()}`)
            .then(response => this.props.dispatchCategory({
                // data: response,
                // category: this.props.name.toLowerCase()
                selectedCategory: response,
                categoryName: this.props.name.toLowerCase()

            }))
    }

    componentDidMount() {
        this.fetchCategory(this.props.name);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
            this.fetchCategory(nextProps.name)
        }
    }

    render() {
        return (
            <div className="root">
                <GridListComponent cellHeight={"auto"} className="gridList" cols={3}>
                    {this.props.category.map(p =>
                        <GridListTile key={p.title} cols={p.cols || 1}>

                            <NavLink to={`/detail/${this.props.name}/${p.title}`}>
                                <Picture details={p}> </Picture>
                            </NavLink>
                        </GridListTile>
                    )}
                </GridListComponent>
            </div>
        )
    }
}

GridList.defaultProps = {
    category: []
}

GridList.propTypes = {
    name: PropTypes.string,
    category: PropTypes.array,
    dispatchCategory: PropTypes.func
}

const mapStateToProps = (state, { name }) => ( {
    category: state.categories[ name.toLowerCase() ]        //{name} is shortcut of prop category which has name
} );

// const mapDispatchToProps = dispatch => ( {
//     dispatchCategory: (selectedCategory) => dispatch(recieveCategory(selectedCategory))
//
// } )

// const test = (arg1) => 2 * arg1
//
// const multiplier = (num) => console.log(test(num) / 2);
//
// multiplier(7);

export default connect(
    mapStateToProps,
    { dispatchCategory: recieveCategory }
)(GridList)
