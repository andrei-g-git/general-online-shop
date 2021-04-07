import React from 'react';

let $ = require('jquery');

function UserLogin(props) {
    return (
        <div> rtesgsregsregs
            <form
                onSubmit={handleSubmit}
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

const handleSubmit = (event) => {
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
        data: credentials
    });
}

export default UserLogin;
