import React from 'react';
import Burger from '../../components/Burger';
import { shallow } from 'enzyme';
import IconButton from "@material-ui/core/IconButton/IconButton";
// import * as trackSomething from 'something'   example for stub test
import sinon from 'sinon';
import Menu from '@material-ui/core/Menu';


describe("Burger Page", function () {

    const burger = shallow(<Burger/>);

    it(" should render Burger", function () {
        // sinon.stub(trackSomething, 'default');
        // const burger = shallow(<Burger />);
        // burger.find(IconButton).simulate("click");
        // expect(trackSomething).to.have.been.calledWith('string');
        //above codes were haris explanation for meaning of stub
        const burger = shallow(<Burger/>);
        expect(burger.exists()).toBe(true);
    })

    it(" should render div", function () {
        const burger = shallow(<Burger/>);
        expect(burger.find('div').exists()).toBe(true);
    })

    it("should render Icon button", function () {
        const burger = shallow(<Burger/>);
        expect(burger.find('div').find(IconButton).exists()).toBe(true);
    })

    it("should check prop conClick on IconButton ", function () {
        const burger = shallow(<Burger/>);
        expect(burger.find(IconButton).prop('onClick')).toBe(burger.instance().handleClick);
    })

    it("should check handleClick ", function () {

        //Simulate click on IconButton meanwhile be sure event is provided and should mock
        // and check if menu has correct Anchor element.

        const button = <button/>;
        const burger = shallow(<Burger/>);

        burger.find(IconButton).simulate('click', { currentTarget: button })

        expect(burger.find(Menu).prop('anchorEl')).toBe(button);

    })

    it("should check handle close", function () {
        const button = <button/>;
        const burger = shallow(<Burger/>);

        burger.find(IconButton).simulate('click', { currentTarget: button })

        burger.find(Menu).prop("onClose")();

        expect(burger.find(Menu).prop('anchorEl')).toBe(null);

    })

})

/////////correct/////////////////////////////////////////
// .simulate('change', { target: { value: '7' } })
// -------------------------------------------------------------------

//Simulate click on IconButton meanwhile be sure event is provided
//and should mock

//and check if menu has correct Anchor element


