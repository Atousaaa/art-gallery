import React from 'react';
import { shallow } from 'enzyme';
import Album from '../../components/Album';
import NavigationClient from "../../components/NavigationClient";


describe("Album Page", function () {

    const album = shallow(<Album/>);

    it("should render Album", function () {
        const album = shallow(<Album/>);
        expect(album.exists()).toBe(true);
    })

    it(" should render div", function () {
        const album = shallow(<Album/>);
        expect(album.find('div').exists()).toBe(true);
    })

    it(" should render header", function () {
        const album = shallow(<Album/>);
        const tree = album.find('div').find('div').find('header');
        const navigationClient = shallow(<NavigationClient path='landscape'/>);

        expect(album.find('div').find('div').find('header').hasClass('gallery-header')).toBe(true);

        expect(tree.find('div').hasClass('menu-class')).toBe(true);
        expect(album.find('<TopBat/>').exists()).toBe(true);
        expect(album.find('h1').hasClass('gallery-title')).toBe(true);
        expect(album.find(navigationClient).exists()).toBe(true);
        
       //not complete
    })
})


//   expect(links.at(0).hasClass('active')).toBe(true);

