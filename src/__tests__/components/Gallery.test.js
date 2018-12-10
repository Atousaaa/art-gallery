import React from 'react';
import Gallery from '../../components/Gallery';
import { shallow } from 'enzyme';
import TopBar from '../../components/TopBar';
import GalleryGridlist from '../../components/GalleryGridlist';


describe("render gallery", function () {

    it("render gallery", function () {
        const gallery = shallow (<Gallery/>);

        expect(gallery.find('header').hasClass('about-header')).toBe(true);
        expect(gallery.find('header').find('div').find('TopBar').exists()).toBe(true);
        expect(gallery.find('header').find('span').find('h1').hasClass('title-gallery'));
        expect(gallery.find('header').find('span').find('h1').text()).toBe('Upcoming Galleries');
        expect(gallery.find(GalleryGridlist).exists()).toBe(true);
    })
})

//finish