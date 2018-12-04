import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

global.window = {
    location: { replace: jest.fn() }
};

global.fetch = jest.fn();

// global.dispatchCategory = jest.fn();

// here the problem of not using JSDOM is that every time
//for every function you should mock the function while with JSDOM you could use all the window object
//like window.open , window. .... but in jest v.13 seems is not working properly with JSDOM.


// global.window = window;
global.document = window.document;