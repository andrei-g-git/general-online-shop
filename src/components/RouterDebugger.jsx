import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";

class RouterDebugger extends Component {
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate',nextProps, nextState)
    }
    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate',prevProps)

    }

    render() {
        return null
    }
}

export default withRouter(RouterDebugger)