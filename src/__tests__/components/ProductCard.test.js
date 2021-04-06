import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductCard from '../../components/ProductCard.jsx';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe("product card", () => {
    let setUp = ({ props }) => {
        return shallow(<ProductCard {...props} />); //this doesn't work for some reason
    }

    it("has the right text content", () => {

        let wrapper = shallow(<ProductCard product={product} />); //so this works but not the other thing
        const allText = wrapper.text();   

        expect(allText
            .includes("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        )
            .toBe(true);

        expect(allText
            .includes("109.95")
        )
            .toBe(true);                       
    });

    it("has hyphens in the url page name", () => {
        let wrapper = shallow(<ProductCard product={product} />);
        const link = wrapper.find(Link);
        const path = link.props().to;
        const lastSlashPosition = path.lastIndexOf("/");
        const pageName = path.substring(lastSlashPosition + 1);
        expect(pageName).toBe("Fjallraven---Foldsack-No--1-Backpack--Fits-15-Laptops");
    })
});

//THIS ISN"T THE DATA I PASS AS PROPS, THE SERVER ALREADY PARSES THE DATABASE FOR ME
const product = JSON.parse('{"id": 1,"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price": 109.95,"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category": "men clothing","image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating": 4}');
