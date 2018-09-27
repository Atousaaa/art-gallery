import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from '../stores/rootReducer';
import Home from "./Home";
import About from "./About";
import Album from './Album';
import PictureDetails from "./PictureDetails";



const store = createStore(rootReducer);

class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <hr/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/Album/:category" component={Album} />
                        <Route exact path="/detail/:category/:name" component={PictureDetails} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App