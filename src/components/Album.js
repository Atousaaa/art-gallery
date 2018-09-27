import React from 'react';
import './Album.css';
import GridList from './GridList';
import NavigationClient from './NavigationClient';
import TopBar from "./TopBar";

class Album extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            data:[],
        };
    }
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
                <div className="gallery">
                    <GridList name={photoCategory} />
                </div>

            </div>
        )
    }
}

export default Album;

