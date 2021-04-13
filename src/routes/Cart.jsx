import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useStore, connect } from 'react-redux';
import * as actions from '../js/actions';
import CartItem from '../components/CartItem';

let $ = require('jquery');
class Cart extends React.Component{
    // constructor(){
    //     super();

    //     this.state = { //no side effects, just using as a hacky way to force render because the redux props can't be arsed to do that
    //         count: 0
    //     }
    // }
    componentDidMount(){
        $.ajax({
            type: "POST",
            url: "/api/cart",
            data: {id: this.props.userId},
            success: response => {
                console.log(response);

                this.props.loadCart(response); //I don't think this runs

                //this.forceUpdateState();
            }
        });
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevState !== this.state) {
    //     this.forceUpdate(); //because it doesn't seem to update the actual state on redux state change
    //     }
    // }

    render(){
        return (
            <div>
                {
                    this.props.cart.length
                        ?
                            this.props.cart.map((item) => 
                                <CartItem
                                    index={item.addToCartId}
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

    updateCartItemQuantity = (quantity, addToCartId) => {

        const userId = this.props.userId;//2; //no idea how to access the store from here
        const data = {
            quantity: quantity,
            addToCartId: addToCartId,
            userId: userId
        }
        $.ajax({
            type: "POST",
            url: "/api/cart/modify",
            data: data,
            success: (response) => {
                console.log(response);

                this.props.loadCart(response); 

                //this.forceUpdateState();
            }
        });
    }

    // forceUpdateState = () =>{
    //     const count = this.state.count;
    //     let newCount = count + 1;
    //     if(count >= 999) newCount = 0;
    //     this.setState({
    //         count: newCount
    //     })
    // }

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
