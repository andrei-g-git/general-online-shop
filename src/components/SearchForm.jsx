import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../js/actions';

let $ = require('jquery');

function SearchForm(props) {
    return (
        <form id="search-form" //should reuse
            onSubmit={curryHandleSubmit(props)} //it's a currying function so it can't be a callback, it executes immediately to provide the event handler the actual callback
        >
            <input id="search-field"
                className="search-field"
                type="search"
                placeholder="Type here to search"
            />
            <button type="submit">Go!</button>
        </form>
    )
};

const curryHandleSubmit = (props) =>{
    return function(event) {
        console.log(props.route)
        event.preventDefault(); //this doesn't actually prevent default behavior?
        const textField = document.getElementById("search-field");  //DO NOT ACCEPT DOUBLE QUOTES, THE MYSQL QUERY HAS SINGLE QUOTES IN IT!!!!
        const searchString = textField.value;
        console.log(searchString + "   to   " + props.route)
        $.ajax({
            type: "POST",
            url: props.route,
            data: {
                title: searchString
            },
            success: response => { 
                //console.log("should redirect"); 
                console.log(response);
                props.notify(response);
            }
        });
    }
}

// const mapDispatchToProps = (dispatch) => { //this is tightly coupled, won't be very reusable
//     return{

//     }
// }

export default SearchForm;
