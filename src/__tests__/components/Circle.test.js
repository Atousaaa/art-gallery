import React from 'react';
import {shallow} from 'enzyme';
import Circle from '../../components/Circle';

describe("Circle", function () {

    it("render circle", function () {
        const circle = shallow(<Circle/>);
        expect(circle.exists()).toBe(true);
    })

    it("render span and link", function () {
        const circle = shallow(<Circle name="Portrait"/>);

        expect(circle.find('span').hasClass('circle')).toBe(true);

        expect(circle.find('span').children().prop('to')).toBe('/Album/Portrait')
    })

    //FINISH
})