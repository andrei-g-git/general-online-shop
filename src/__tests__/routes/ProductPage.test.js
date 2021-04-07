import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductPage from '../../routes/ProductPage';

configure({adapter: new Adapter()});

describe("product page", () => { //some module error because I import static assets like the star png I don't know ...

    it("renders all the rating stars", () => {
        const wrapper = shallow(<ProductPage product={product} />);
        const stars = wrapper.find(".star");
        expect(stars.length).toBe(4);
    })
});

const product = JSON.parse('{"id": 1,"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price": 109.95,"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category": "men clothing","image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating": 4}');
