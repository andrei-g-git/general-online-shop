import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/actions';
import { withRouter } from 'react-router-dom';
/* import Footer from '../components/Footer'; */
import '../css/UserLogin.scss';

let $ = require('jquery');

function UserLogin(props) {
    return (
        <div>
            <div id="user-login"> 
                <form id="login-form"
                    onSubmit={curryHandleSubmit(props)}
                >
                    <h1 id="sign-in-label">Sign In</h1>

                    <input id="email-field"
                        type="email"
                        placeholder="Email:"
                    />
                    <input id="password-field"
                        type="password"
                        placeholder="Password:"
                    />
                    <input id="submit-credentials"
                        type="submit"
                        value="Log in"
                    />
                </form>

                <div id="or-signin-with">
                    <p className="gray-text">Or</p>
                    <p className="gray-text">Sign in with</p>
                </div>

                <input id="login-facebook" className="social-media-signin" type="button" value="Facebook"/>
                <input id="login-google" className="social-media-signin" type="button" value="Google"/>
                <input id="login-twitter" className="social-media-signin" type="button" value="Twitter"/>

                <div id="or-signup">
                    <p className="gray-text">Or</p>
                    <p id="sign-up" className="gray-text">Sign up</p>
                    <p className="gray-text">for free</p>    
                </div>
            </div>

            {/* <Footer></Footer> */}
        </div>
    )
}

function curryHandleSubmit(props){
    return function(event){
        event.preventDefault();

        const emailField = document.getElementById("email-field");
        const passwordField = document.getElementById("password-field");

        const credentials = {
            email: emailField.value,
            password: passwordField.value
        }

        $.ajax({
            type: "POST",
            url: "/api/authentication",
            data: credentials,
            success: response => {

                handleLogIn(props, response);
            }
        });
    }
}

const handleLogIn = (props, response) => {
    if(response.loggedIn === true){
        props.logInUser(response.id, true);
        props.history.push("/"); 
    } else {
        console.log("incorrect or missing credentials")
        console.log(response)
    }
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.customerReducer.loggedIn,
        userId: state.customerReducer.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logInUser: (id, isLoggedIn) => {
            dispatch(actions.loggedIn(id, isLoggedIn));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLogin));
