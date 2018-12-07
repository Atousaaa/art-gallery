import React from 'react';
import { shallow } from 'enzyme';
import NavigationClient from '../../components/NavigationClient';
import {Link} from "react-router-dom";


describe ( "NavigationClient Page", function () {

    const navigationClient = shallow(<NavigationClient />);


    it(" should render NavigationClient", function (){
        expect (navigationClient.exists()).toBe(true);
    })

    it("should render div ", function () {
        expect(navigationClient.find('.navigation-box').exists()).toBe(true);
    })

    it("should active landscape link if path is landscape props", function () {
        const navigationClient = shallow(<NavigationClient path='landscape'/>);
        const links = navigationClient.find(Link);
        expect(links.at(0).hasClass('active')).toBe(true);
        // at(0) is same as first() //important
        navigationClient.find(Link).slice(1).forEach((node) => {
            expect(node.hasClass('active')).toBe(false);
        })
    })

    it("should active portrait link if path is portrait props", function () {
        const navigationClient = shallow(<NavigationClient path='portrait'/>);
        expect(navigationClient.find(Link).at(1).hasClass('active')).toBe(true);
    })

    it("should active figure link if path is figure props", function () {
        const navigationClient = shallow(<NavigationClient path='figure'/>);
        expect(navigationClient.find(Link).at(2).hasClass('active')).toBe(true);
    })

    it("should active portrait link if path is illustration props", function () {
        const navigationClient = shallow(<NavigationClient path='illustration'/>);
        expect(navigationClient.find(Link).at(3).hasClass('active')).toBe(true);
    })


})

//Here I Learned ----1---how to use different properties of component in test ,and ----2-----how to
// check the elements of array by at(#number of element position) example ***at(0)*** which is first
// element, -----3-----which is work as same as ***first()***,----4-----using slice which start the
//array from that element example slice(1)***which start the array from the first element not 0

//FINISH

