import React from 'react';
import { shallow } from 'enzyme';
import { GalleryDetails } from '../../components/GalleryDetails';
import * as request from "../../lib/requests";
import { GridList } from "../../components/GridList";

request.fetchJSON = jest.fn()

describe("Gallery Gridlist", function () {

    it("should render gallery gridlist", function () {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchGalleryDetails = jest.fn();
        const title="portrait1";

        const gallerydetails = shallow(<GalleryDetails dispatchGalleryDetails={dispatchGalleryDetails} match={{ params: { title }}} />, { disableLifecycleMethods: true });

        expect(gallerydetails.exists()).toBe(true);

    })

it("should render fetch", async () => {

    request.fetchJSON = () => Promise.resolve(42);
    const dispatchGalleryDetails = jest.fn();
    const title= "portrait1";

    const gallerydetails = shallow(<GalleryDetails dispatchGalleryDetails={dispatchGalleryDetails} match={{ params: { title }}}/>, { disableLifecycleMethods: true });
    await gallerydetails.instance().componentDidMount();

    expect(dispatchGalleryDetails).toHaveBeenCalledWith({photoData:42});
})
})
