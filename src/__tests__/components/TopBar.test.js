
import React from 'react';
import { shallow } from 'enzyme';
import TopBar from '../../components/TopBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Burger from "../../components/Burger";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/Home';

describe("TopBar Page", function () {

    const topBar = shallow(<TopBar/>);

    it("should render TopBar", function () {
        expect(topBar.exists()).toBe(true);
    });

    it("should render AppBar", function () {
        expect(topBar.find('.app-bar').exists()).toBe(true);
        expect(topBar.find(AppBar).exists()).toBe(true);
    });

    it("should render Toolbar",function () {
        expect(topBar.find(Toolbar).exists()).toBe(true);
    })

    it("should render Burger", function () {
        expect(topBar.find(Burger).exists()).toBe(true);
    })

    it("should render AppBar-Toolbar-Burger nested", function () {
        expect(topBar.find('.app-bar').find(AppBar).find(Toolbar).find(Burger).exists()).toBe(true);
    })

    // const tree = topBar.find('.app-bar').find(AppBar).find(Toolbar).find(Burger)

    it("should render IconButton",function () {
        const topBar = shallow(<TopBar/>);
        const tree = topBar.find('.app-bar').find(AppBar).find(Toolbar);

        expect(tree.find(Burger).exists()).toBe(true);
        expect(tree.find('div').find(IconButton).exists()).toBe(true);
        // console.log(tree.find('div').find(IconButton).prop('onClick'));
        expect(tree.find('div').find(IconButton).prop('onClick')).toBe(topBar.instance().handleChange);
        expect( tree.find('div').find(IconButton).find(AccountCircle).find('.home-icon').exists()).toBe(true);
    })


    it("should check inside handleChange function",function () {

        const topBar = shallow(<TopBar/>);

        topBar.find(IconButton).simulate("click")
        //same as topBar.find(IconButton).prop('onClick')()

        console.log(window.location.replace)
        expect(window.location.replace).toHaveBeenCalledWith('/');
    })

})







//now check inside handle click will run the window.location
// sinon and spy on replace
//sinon spy or sinon mock  (spy (simulate the replace)---
// click(enzyme) like find IconButton and simulate click on that button (handle the click
//simulate click and check result of function


//find out how to set spy/stub in jest on componentFunction
// jsdom setup, make window working in test environment
