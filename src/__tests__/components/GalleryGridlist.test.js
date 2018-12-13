import React from 'react';
import { shallow } from 'enzyme';
import { GalleryGridlist } from '../../components/GalleryGridlist';
import * as request from "../../lib/requests";

import MediaCard from "../../components/MediaCard";

request.fetchJSON = jest.fn()

describe("GalleyGridlist", function () {

    it("should render GalleryGridlist", async () => {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleries = jest.fn();
        const galleriesList = [];

        const gallerygridlist = shallow(<GalleryGridlist
            dispatchGalleries={dispatchGalleries}/>, { disableLifecycleMethods: true });

        expect(gallerygridlist.exists()).toBe(true);
    })

    it("should render componentDidMount", async () => {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleries = jest.fn();

        const gallerygridlist = shallow(<GalleryGridlist
            dispatchGalleries={dispatchGalleries}/>, { disableLifecycleMethods: true });
        await gallerygridlist.instance().componentDidMount();

        expect(dispatchGalleries).toHaveBeenCalledWith(42);
    })

    it("should catch error", async () => {
        request.fetchJSON = () => Promise.reject("error");
        const dispatchGalleries = jest.fn();

        const gallerygridlist = shallow(<GalleryGridlist
            dispatchGalleries={dispatchGalleries}/>, { disableLifecycleMethods: true });
        await gallerygridlist.instance().componentDidMount();

        expect(dispatchGalleries).toHaveBeenCalledWith(42);
    })

    it("should render the div and GridList component", function () {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleries = jest.fn();

        const gallerygridlist = shallow(<GalleryGridlist
            dispatchGalleries={dispatchGalleries}/>, { disableLifecycleMethods: true });

        expect(gallerygridlist.find('div').find('.sorting').exists()).toBe(true);
    })

    it("should render the map", function () {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleries = jest.fn();
        const galleriesList = [
            {
                'id': 1,
                'title': 'Typosty',
                'image': '/images/silhouettes.jpg',
                'city': 'Toronto',
                'rating': 3
            },
            {
                'id': 2,
                'title': 'Hopping for joy',
                'image': '/images/silhouettes.jpg',
                'city': 'Tokyo',
                'rating': 4
            } ];

        const gallerygridlist = shallow(<GalleryGridlist galleriesList={galleriesList}
                                                         dispatchGalleries={dispatchGalleries}/>, { disableLifecycleMethods: true });

        const expected = {
            'id': 1,
            'title': 'Typosty',
            'image': '/images/silhouettes.jpg',
            'city': 'Toronto',
            'rating': 3
        };

        expect(gallerygridlist.find(MediaCard).first().prop("gallery")).toEqual(expected);

    })
});

//here I learned if is long put the property inside the variable and also use toEqual instead of toBe since you are always in safe side


