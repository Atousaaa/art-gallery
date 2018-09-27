import React, {Component} from 'react';
import './Home.css';
import Circle from './Circle';
import TopBar from './TopBar';

class Home extends Component {

    render() {
        return (
            <div className="App testClass">

                <header className="App-header">
                    <div className="menu-class">
                        <TopBar/>
                    </div>
                    <div >
                        <h1 className="App-title" >Welcome to Art Page</h1>
                    </div>
                </header>
                <div className="app-main">
                    <div className="single-circle">
                        <Circle name="Landscape" imgUrl="/images/Painting1.jpg"/>
                    </div>
                    <div className="double-circle">
                        <Circle name="Portrait"  imgUrl="/images/self-portrait.jpg"/>
                        <Circle name="Illustration" imgUrl="/images/painting2.jpeg"/>
                    </div>
                    <div className="single-circle">
                        <Circle name="Figure" imgUrl="/images/woman.jpg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


/*<img src={logo} className="App-logo" alt="logo"/>*/
