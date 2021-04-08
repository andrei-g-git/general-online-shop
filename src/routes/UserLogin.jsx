import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/actions';
import { withRouter } from 'react-router-dom';

let $ = require('jquery');

function UserLogin(props) {
    return (
        <div> rtesgsregsregs
            <form
                onSubmit={curryHandleSubmit(props)}
            >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <input id="email-field"
                    type="email"
                />


                <input id="password-field"
                    type="password"
                />


                <input
                    type="submit"
                    value="Log in"
                />

            </form>
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

                handleLogIn(props);
            }
        });
    }
}

const handleLogIn = (props) => {
    props.logInUser(true);

    props.history.push("/"); //needs {withRouter}
}

const mapStateToProps = (state) => {
    return{
        loggedIn: state.customerReducer.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logInUser: (isLoggedIn) => {
            dispatch(actions.loggedIn(isLoggedIn));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLogin));
