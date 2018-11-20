import React, {Component} from "react";
import './About.css';
import TopBar from "./TopBar";

class About extends Component {
    render() {
        return (
            <div>
                <header className="about-header">
                    <div className="menu-class">
                        <TopBar/>
                    </div>
                    <span className="about-text">
                        <h1 className="app-title-about">The Art of sharing Art</h1>
                        <p> The ultimate goal of art is to show the internal tissues of the soul, we will then acknowledge too the importance of sharing sensibility, beauty, history and knowledge.</p>
                    </span>
                </header>

                <div className="about-body">
                    <div>
                        <p>General enquiries</p>
                        <p>Email: info@artuk.org</p>
                        <p> Telephone: 020 7927 6250</p>
                        <p>Image rights enquiries</p>
                        <p> Please visit our image use page for more information.</p>
                        <p> Email: rights@artuk.org</p>
                        <p> Shop enquiries</p>
                        <p> Please see the Art UK Shop for more information.</p>
                    </div>
                    <div>
                        <span className="about-image">
                             <img src="images/office.jpg" className="office-img" alt=""/>
                        </span>
                    </div>
                </div>
                <footer className="description"/>
            </div>
        )
    }
}

export default About;
