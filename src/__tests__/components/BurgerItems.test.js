import React from 'react';
import {shallow} from 'enzyme';
import BurgerItems from '../../components/BurgerItems.js'
import MenuItem from "@material-ui/core/MenuItem/MenuItem";


describe("render Burger Items",function () {
    
    it("render BurgerItems", function () {
        const burgeritems = shallow (<BurgerItems options={[{'name':'Upcoming Galleries','link':'/Galleries'}]}/>)

        expect(burgeritems.exists()).toBe(true);
    })
    
    it("render map ", function () {
        const burgeritems = shallow (<BurgerItems options={[{'name':'Upcoming Galleries','link':'/Galleries'},{'name':'Albums','link':'/'},{'name':'About','link':'/About'}]}/>)

        // console.log(burgeritems.find(MenuItem).at(0).find('Link').prop('to'));

        expect(burgeritems.find(MenuItem).at(0).find('Link').children().text()).toBe('Upcoming Galleries');
        expect(burgeritems.find(MenuItem).at(0).find('Link').prop('to')).toBe('/Galleries');

        expect(burgeritems.find(MenuItem).at(1).find('Link').children().text()).toBe('Albums');
        expect(burgeritems.find(MenuItem).at(1).find('Link').prop('to')).toBe('/');

        expect(burgeritems.find(MenuItem).at(2).find('Link').children().text()).toBe('About');
        expect(burgeritems.find(MenuItem).at(2).find('Link').prop('to')).toBe('/About');


    })
})

//here I learned how to test the map over element (Menu Item here)
//FINISH