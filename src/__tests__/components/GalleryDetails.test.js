import React from 'react';
import { shallow } from 'enzyme';
import { GalleryDetails } from '../../components/GalleryDetails';
import * as request from "../../lib/requests";

request.fetchJSON = jest.fn()

describe("Gallery Gridlist", function () {

    it("should render gallery gridlist", async () => {

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


it("should render componentDidMount with prop photoData", async () => {

    request.fetchJSON = () => Promise.resolve(42);
    const dispatchGalleryDetails = jest.fn();
    const title= "portrait1";
    const gallerydetails = shallow(<GalleryDetails photoData={{title : 42}} dispatchGalleryDetails={dispatchGalleryDetails} match={{ params: { title }}}/>, { disableLifecycleMethods: true });
    await gallerydetails.instance().componentDidMount();

    expect(dispatchGalleryDetails).not.toHaveBeenCalled();

})

//important : photoData={       here comes a non-string prop      }
// object is {title:42}
//photoData={<- saying now comes something which is not a string    { foo: 'bar' } <- this is your prop actually     }

it("should fetch photoData on mount when its empty ", async () => {

    request.fetchJSON = () => Promise.resolve(42);

    const dispatchGalleryDetails = jest.fn();
    const title= "portrait1";
    const gallerydetails = shallow(<GalleryDetails photoData={{}} dispatchGalleryDetails={dispatchGalleryDetails} match={{ params: { title }}}/>, { disableLifecycleMethods: true });
    await gallerydetails.instance().componentDidMount();

    expect(dispatchGalleryDetails).toHaveBeenCalledWith({photoData : 42});

})

