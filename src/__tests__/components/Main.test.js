import React from 'react';
import Main from '../../components/Main';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';

// const chai = require('chai');
const sinon = require('sinon');

// chai.should();

let $ = require('jquery');

configure({adapter: new Adapter()});

const mockStore = configureMockStore();

describe("Main", () => {

    let store;
    let wrapper;

    beforeEach(() => {
        
    })

    it("loads the data into the store props from the server", /* async */() => {

        const clock = sinon.useFakeTimers();

        $.ajax = jest.fn().mockImplementationOnce(() => {
            return Promise.resolve(fakeResponse);
        });

        const initialState = {
            databaseReducer: {
                products: []
            },
            uiReducer: {
                touchStartX: 0,
                touchStartY: 0,
                touchMoveX: 0,
                touchMoveY: 0,
                navSliderOpen: false
            }
        }

        store = mockStore(initialState);
        wrapper = shallow(<Main store={store} />);

        clock.tick(100);

        const props = wrapper.props();

        //console.log(props);
        console.log(props.children.props);

        // const testTitle = state.databaseReducer.products[0].title;
        // expect(testTitle).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    });
});


export const fakeResponse = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        discount: 10,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 4
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        discount: 5,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solidstitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men clothing",
     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
       rating: 5
},
{
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        discount: 0,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: 3
    }
]

