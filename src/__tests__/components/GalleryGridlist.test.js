import React from 'react';
import { shallow } from 'enzyme';
import { GalleryGridlist } from '../../components/GalleryGridlist';
import * as request from "../../lib/requests";
import { GalleryDetails } from "../../components/GalleryDetails";

request.fetchJSON = jest.fn()

describe("GalleyGridlist", function () {

    it("should render GalleryGridlist", async () => {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleries = jest.fn();
        const galleriesList = [];

        const gallerygridlist = shallow (<GalleryGridlist dispatchGalleries = {dispatchGalleries} />, { disableLifecycleMethods: true });

        expect(gallerygridlist.exists()).toBe(true);
    })

    it("should render componentDidMount", async () => {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleries = jest.fn();

        const gallerygridlist = shallow (<GalleryGridlist dispatchGalleries = {dispatchGalleries} />, { disableLifecycleMethods: true });
        await gallerygridlist.instance().componentDidMount();

        expect (dispatchGalleries).toHaveBeenCalledWith(42);
    })
})

