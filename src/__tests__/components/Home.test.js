import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../components/Home';
import Circle from '../../components/Circle';

describe('Home', function () {

    it("should render title", function () {
        const home = shallow(<Home/>);
        expect(home.find('div').find('.App-title').text()).toBe("Welcome to Art Page")
    })

    it("should render landscape circle", function () {
        const home = shallow(<Home/>);
        expect (home.find('.single-circle').first().find(Circle).prop('name')).toBe("Landscape")
        expect (home.find('.single-circle').first().find(Circle).prop('imgUrl')).toBe("/images/Painting1.jpg")
    })

    it("should render portrait circle", function () {
        const home = shallow(<Home/>);
        expect (home.find('.double-circle').find(Circle).first().prop('name')).toBe("Portrait")
        expect (home.find('.double-circle').find(Circle).first().prop('imgUrl')).toBe("/images/self-portrait.jpg")
    })

    it("should render Illustration circle", function () {
        const home = shallow(<Home/>);
        expect (home.find('.double-circle').find(Circle).at(1).prop('name')).toBe("Illustration")
        expect (home.find('.double-circle').find(Circle).at(1).prop('imgUrl')).toBe("/images/painting2.jpeg")
    })

    it("should render Figure circle", function () {
        const home = shallow(<Home/>);
        expect (home.find('.single-circle').at(1).find(Circle).prop('name')).toBe("Figure")
        expect (home.find('.single-circle').at(1).find(Circle).prop('imgUrl')).toBe("/images/woman.jpg")
    })

})


//FINISH