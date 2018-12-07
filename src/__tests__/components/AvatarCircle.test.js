import React from 'react';
import {shallow} from 'enzyme';
import AvatarCircle from '../../components/AvatarCircle';

describe("Avatar Circle", function () {

    it("should render AvatarCircle", function () {
        const avatarcircle = shallow(<AvatarCircle />);
        expect(avatarcircle.exists()).toBe(true);
    })
})

//strange: I cannot find the component which is used this one.