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

export class GridList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    //down code of fetch was properly , we changed downer for doing test while is not working if
    // you dont make the promise as async and await bcs the test works more faster and cannot
    // distinguish havebeencalled of dispatchproperty and brings error


    // fetchCategory = (category) => {
    //
    //     return fetchJSON(`/api/topic/${category.toLowerCase()}`)
    //         .then(() => {
    //             return this.props.dispatchCategory({
    //                 // data: response,
    //                 // category: this.props.name.toLowerCase()
    //                 selectedCategory: response,
    //                 categoryName: this.props.name.toLowerCase()
    //             })
    //         })
    // }

    fetchCategory = async () => {

        console.log("fetch started",this.props.name);
        const categoryName = this.props.name.toLowerCase();
        const response = await fetchJSON(`/api/topic/${categoryName}`)
        console.log("dispatchCategory and nextProps is ",this.nextProps);
        return this.props.dispatchCategory({
            selectedCategory: response,
            categoryName
        })
    }


    async componentDidMount() {
        console.log("componentDidMount");
        return await this.fetchCategory();
    }

    async componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps and netProps is ",nextProps.name);
        if (this.props.name !== nextProps.name) {
            console.log("props.name is differ from nextProps.name");
            return await this.fetchCategory(nextProps.name)
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
