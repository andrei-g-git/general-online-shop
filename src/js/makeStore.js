import { createStore, combineReducers, compose } from 'redux';
import { databaseReducer } from './databaseReducer';
import { uiReducer } from './uiReducer';

export function makeStore(){
    const allReducers = combineReducers({
        databaseReducer: databaseReducer,
        uiReducer: uiReducer
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