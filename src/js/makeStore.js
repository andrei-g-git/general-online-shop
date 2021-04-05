import { createStore, combineReducers, compose } from 'redux';
import { databaseReducer } from './databaseReducer.js';

export function makeStore(){
    const allReducers = combineReducers({
        databaseReducer: databaseReducer
    });

    return(
        createStore(
            allReducers,
            //for redux dev tools I think
            compose(typeof window === "object" &&
                typeof window.devToolsExtension !== "undefined" ?
                window.devToolsExtension() :
                f => f
            )
        )
    )
}