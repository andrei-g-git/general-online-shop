import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useStore, connect } from 'react-redux';
import * as actions from '../js/actions';

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

                props.loadCart(response); // NOT ENOUGH I also need to get the products (the ones I get in Main may ne out of date), then the actual cart is filtered by product id from the product collection
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

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            aegresrgsergsreg

            {
                props.cart.length
                    ?
                        props.cart.map((item, index) => 
                            <p key={index}>{item.productId}</p>    
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
