import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useStore, connect } from 'react-redux';
import * as actions from '../js/actions';
import CartItem from '../components/CartItem';

let $ = require('jquery');

//function Cart(props) {
class Cart extends React.Component{

    // const store = useStore();
    // const state = store.getState();
    // const userId = state.customerReducer.userId;
    // console.log(userId);

    //useEffect(() => {
    componentDidMount(){
        $.ajax({
            type: "POST",
            url: "/api/cart",
            data: {id: this.props.userId},
            success: response => {
                console.log(response);

                this.props.loadCart(response); 
            }
        });

        //test

        this.updateCartItemQuantity(-1, 7)

    }/* ,
        []
    ) */

    render(){

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
                this.props.cart.length
                    ?
                        this.props.cart.map((item, index) => 
                            <CartItem
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                discount={item.discount}
                                currencyPrefix="€"
                                quantity={item.quantity}
                                addToCartId={item.addToCartId}
                                notifyQuantity={this.updateCartItemQuantity}
                            />
                                
                        )
                    :
                            <div></div>
            }
        </div>
    )

    }
//}

    /* const  */updateCartItemQuantity = (quantity, addToCartId) => {

        const userId = this.props.userId;//2; //no idea how to access the store from here
        const data = {
            quantity: quantity,
            addToCartId: addToCartId,
            userId: 2
        }
        $.ajax({
            type: "POST",
            url: "/api/cart/modify",
            data: data,
            success: (response) => {
                console.log(response);

                this.props.loadCart(response); 
            }
        });
    }

}

const mapStateToProps = (state) =>{
    return{
       cart: state.databaseReducer.cart,
       userId: state.customerReducer.userId 
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
