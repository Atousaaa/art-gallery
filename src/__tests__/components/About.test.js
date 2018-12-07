import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';
import TopBar from '../../components/TopBar';

describe("About Page", function () {

    it("should render TopBar", function () {
       const about = shallow(<About/>);

       expect(about.find(TopBar).exists()).toBe(true);
    });

    it("should render image", function () {
        const about = shallow(<About/>);
        expect(about.find('.about-image').exists()).toBe(true);
        expect(about.find('.about-image img').prop('src')).toBe('images/office.jpg');
    })


});


//for testing
// const tree = about.find('.app-bar').find(AppBar).find(Toolbar);
// expect(tree.find(Burger).exists()).toBe(true);
// expect(tree.find(IconButton).()).toBe(true);

//finish