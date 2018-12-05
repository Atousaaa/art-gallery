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

    it( "should receive props", async function () {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchCategory = jest.fn();
        const gridlist = shallow(<GridList name ="landscape"  dispatchCategory={dispatchCategory}/>,{ disableLifecycleMethods: true });
        await gridlist.instance().componentWillReceiveProps({name:"figure"});
        let name = 'figure';
        gridlist.setProps({ name });
        expect(dispatchCategory).toHaveBeenCalledWith({ "categoryName": "figure", "selectedCategory": 42 })

    } )

    // it( "should receive props", async function () {
    //
    //     request.fetchJSON = () => Promise.resolve(42);
    //     // const dispatchCategory = jest.fn();
    //     const gridlist = shallow(<GridList name ="landscape" />);
    //     // const componentWillReceiveProps = jest.fn();
    //     await gridlist.instance().componentWillReceiveProps();
    //     const fetchCategory = jest.fn();
    //     // let name = 'figure';
    //     // gridlist.setProps({ name });
    //      expect(dispatchCategory.calls.length).toBe(2);

    // } )

})


