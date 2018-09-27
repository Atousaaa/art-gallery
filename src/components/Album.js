import React from 'react';
import './Album.css';
import GridList from './GridList';
import NavigationClient from './NavigationClient';
import TopBar from "./TopBar";
// import { fetchJSON } from "./lib/requests";
/*
* TODO
*
*
* read es6 promise
*
*
* after. fetch - setState the response
*
*
* render response in state somewhere in this component
*
*
* -------------
*
* make dynamic route for album (parameter)
*
* pass this parameter to album as prop
*
* use this prop to fetch corresponding data
*
* how to provide property from route to component
*
* */


class Album extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            data:[],
        };
    }



///////////******************************************************/////////////
    // test = () => {
    //     const photoCat = this.props.match.params.category;
    //    console.log("she pressed me !!!!!"+ photoCat);
    //
    //
    // };
///////////******************************************************/////////////


    render(){

    const photoCategory = this.props.match.params.category;

        return (

            <div>
                <div>
                    <header className="gallery-header">

                        <div className="menu-class">
                            <TopBar/>
                        </div>
                        <h1 className="gallery-title">{`${photoCategory}`} Paintings</h1>
                        <NavigationClient path={photoCategory}/>
                    </header>
                </div>

                {/*<div className="test-button">*/}
                    {/*<button onClick={this.test}>Press Me to Test</button>*/}
                {/*</div>*/}

                <div className="gallery">
                    <GridList name={photoCategory} />
                </div>

            </div>
        )
    }
}

export default Album;

