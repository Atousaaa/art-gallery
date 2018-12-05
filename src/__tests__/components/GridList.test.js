import React from 'react';
import { shallow } from 'enzyme';
import { GridList } from '../../components/GridList';
import * as request from "../../lib/requests";

request.fetchJSON = jest.fn()

describe("Gridlist page", function () {

    it("should render GridList", async () => {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchCategory = jest.fn();

        const gridlist = shallow(<GridList name="Landscape"
                                           dispatchCategory={dispatchCategory}/>, { disableLifecycleMethods: true });

        await gridlist.instance().componentDidMount();

        expect(dispatchCategory).toHaveBeenCalledWith({ "categoryName": "landscape", "selectedCategory": 42 })

    })

    it("should receive new props in componentWillReceiveProps", async () => {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchCategory = jest.fn();
        const gridlist = shallow(<GridList name="landscape"
                                           dispatchCategory={dispatchCategory}/>, { disableLifecycleMethods: true });
        await gridlist.instance().componentWillReceiveProps({ name: "figure" });

        expect(dispatchCategory).toHaveBeenCalledWith({ "categoryName": "figure", "selectedCategory": 42 })

    })


    it("should not receive new props in componentWillReceiveProps", async () => {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchCategory = jest.fn();
        const fetchCategory = jest.fn();
        const gridlist = shallow(<GridList name="landscape" dispatchCategory={dispatchCategory}/>, {disableLifecycleMethods: true});

        await gridlist.instance().componentWillReceiveProps({ name: "landscape" });

        expect(fetchCategory).not.toHaveBeenCalled();
    })



})


