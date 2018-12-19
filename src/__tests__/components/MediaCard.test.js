import React from 'react';
import { shallow } from 'enzyme';

import MediaCard from '../../components/MediaCard';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



describe("Media Card ", function () {

    it("should render Media card", function () {
        const galleriesList =
            {
                'id': 1,
                'title': 'Typosty',
                'image': '/images/silhouettes.jpg',
                'city': 'Toronto',
                'rating': 3
            };
        const mediacard = shallow(<MediaCard gallery={galleriesList}/>);
        expect(mediacard.exists()).toBe(true);
    })

    it("should render CardActionArea", function () {
        const galleriesList =
            {
                'id': 1,
                'title': 'Typosty',
                'image': '/images/silhouettes.jpg',
                'city': 'Toronto',
                'rating': 3
            };
        const mediacard = shallow(<MediaCard gallery={galleriesList}/>);
        console.log("console",mediacard.find(CardActionArea).find(CardMedia).debug());
        expect(mediacard.find(CardActionArea).find(CardMedia).prop('image')).toBe('/images/silhouettes.jpg');

    })

    it("should renderCardContent", function () {
        const galleriesList =
            {
                'id': 1,
                'title': 'Typosty',
                'image': '/images/silhouettes.jpg',
                'city': 'Toronto',
                'rating': 3
            };
        const mediacard = shallow(<MediaCard gallery={galleriesList}/>);
        console.log(mediacard.find(CardContent).find(Typography).first().text());
        expect(mediacard.find(CardContent).find(Typography).first().text()).toBe('Typosty');

    })
})
