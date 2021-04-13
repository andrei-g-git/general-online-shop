import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useStore, connect } from 'react-redux';
import * as actions from '../js/actions';
import CartItem from '../components/CartItem';

let $ = require('jquery');

function Cart(props) {

    const store = useStore();
    const state = store.getState();
    const userId = state.customerReducer.userId;
    console.log(userId);

    useEffect(() => {
        console.log("mounted")

        $.ajax({
            type: "POST",
            url: "/api/cart",
            data: {id: userId},
            success: response => {
                console.log(response);

                props.loadCart(response); 
            }
        });
    },
        []
    )

    return (
        <div>
            <br/>
            <br/>
            <br/>
            aegresrgsergsreg
            <br/>
            <br/>
            <br/>



            {
                props.cart.length
                    ?
                        props.cart.map((item, index) => 
                            // <div key={index}>
                            //     <img src={item.image} alt="n/a"></img>
                            //     <p>{item.title}</p>
                                
                            // </div>
                            <CartItem
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                discount={item.discount}
                                currencyPrefix="€"
                                quantity={item.quantity}
                            />
                                
                        )
                    :
                            <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
       cart: state.databaseReducer.cart 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadCart: (cart) => {
            dispatch(actions.cartLoaded(cart));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
