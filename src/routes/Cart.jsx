import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../js/actions';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

let $ = require('jquery');
class Cart extends React.Component{

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
    }

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

                <Footer></Footer>
            </div>
        )
    }

    updateCartItemQuantity = (quantity, addToCartId) => {

        const userId = this.props.userId;
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
