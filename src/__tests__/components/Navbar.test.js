import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Navbar from '../../components/Navbar.jsx';

configure({adapter: new Adapter()});

describe("navbar", () => {
    let setUp = ({props}) => {
        return shallow(<Navbar {...props} />);
    }

    it("renders 5 children (burger, name, search, cart, user)", () => {
        const props = {
            burgerPath: "/hamburgler",
            burgerIcon: "https://somephoto.com/saerwfeawf.jpg",
            logoPath: "/",
            logoIcon: "serfresfsref",
            searchPath: "/duckduckgobaby",
            searchIcon: "awefaewfa.zip",
            cartPath: "/americansarefat",
            cartIcon: "awefaewfawef",
            userPath: "/loginshit",
            userIcon: "awefeawfawefawef"
        }

        let wrapper = setUp(props);

        expect(wrapper.find("ul").children()).toHaveLength(5);
    });
});