import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from '../stores/rootReducer';
import Home from "./Home";
import About from "./About";
import Album from './Album';
import PictureDetails from "./PictureDetails";
import Gallery from "./Gallery";
import GalleryDetails from "./GalleryDetails";
import ArtistDetails from "./ArtistDetails";


const store = createStore(rootReducer, applyMiddleware(logger));

class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <hr/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/galleries" component={Gallery}/>
                        <Route exact path="/galleries/:title" component={GalleryDetails}/>
                        <Route exact path="/Album/:category" component={Album} />
                        <Route exact path="/detail/:category/:name" component={PictureDetails} />
                        <Route exact path="/artists/:name" component={ArtistDetails} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App