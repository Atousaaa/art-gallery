import React from 'react';
import { shallow } from 'enzyme';
import  { ArtistDetails }  from '../../components/ArtistDetails';
import TopBar from '../../components/TopBar';
import * as request from "../../lib/requests";

request.fetchJSON = jest.fn()

describe("Artist Details", function (){

    it("should render ArtistDetails", async () => {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchArtist = jest.fn();
        const name="JM Robert";
        const artistdetail = shallow(<ArtistDetails dispatchArtist={dispatchArtist} match={{ params: { name }}}/>);

        expect(artistdetail.exists()).toBe(true);
    });

    it("render header and topBar inside", function () {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchArtist = jest.fn();
        const match = {params:{name:"JM Robert"}};
        const artistdetail = shallow (<ArtistDetails dispatchArtist={dispatchArtist} match={match}/>);
        expect(artistdetail.find('.gallery-header').find(TopBar).exists()).toBe(true);
    })

    it("render img with correct url", function () {
        request.fetchJSON = () => Promise.resolve(42);
        const dispatchArtist = jest.fn();
        const params = {name:"JM Robert", image:"images/artists/Robert.jpg"}
        const artistdetail = shallow(<ArtistDetails dispatchArtist={dispatchArtist} match={{ params }} artistData={{name:"JM Robert", image:"images/artists/Robert.jpg"}}/>);
        // const artistdetail = shallow (<ArtistDetails artistData={{image:"images/artists/Robert.jpg",name:"JM",surname:"Robert",birthYear:"1980",birthPlace:"Dublin,Ireland",description:"",lastExhibition:""}}/>);
        console.log(artistdetail);
        expect(artistdetail.find('.details img').prop('src')).toBe('images/artists/Robert.jpg');
    })

    it("render all p for JMRobert", function () {

        request.fetchJSON = () => Promise.resolve(42);
        const dispatchArtist = jest.fn();
        const params = {name:"JM Robert", image:"images/artists/Robert.jpg"}
        const artistdetail = shallow (<ArtistDetails dispatchArtist={dispatchArtist} match={{ params }} artistData={{name:"JM",surname:"Robert",birthYear:"1980",birthPlace:"Dublin,Ireland",description:"Graduated from Wladyslaw Strzeminski Academy of Fine Arts in Lodz (2002), Faculty of Graphics & Painting. She uses acrylic techniques. Her work and live in Lodz, Poland.",lastExhibition:"2017: -Water Odyssey- New Gdynia Station | Lodz | Poland"}}/>);

        console.log(artistdetail.find('p').at(1).debug());
        expect(artistdetail.find('p').at(0).text()).toBe('full name : JMRobert');
        expect(artistdetail.find('p').at(1).text()).toBe('birthYear : 1980');
        expect(artistdetail.find('p').at(2).text()).toBe('birthPlace : Dublin,Ireland');
        expect(artistdetail.find('p').at(3).text()).toBe('description : Graduated from Wladyslaw Strzeminski Academy of Fine Arts in Lodz (2002), Faculty of Graphics & Painting. She uses acrylic techniques. Her work and live in Lodz, Poland.');
        expect(artistdetail.find('p').at(4).text()).toBe('lastExhibition : 2017: -Water Odyssey- New Gdynia Station | Lodz | Poland');

    })

})

//FINISH CORRECTLY