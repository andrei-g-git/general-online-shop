import { createStore, combineReducers, compose } from 'redux';
import { databaseReducer } from './databaseReducer';
import { uiReducer } from './uiReducer';
import { customerReducer } from './customerReducer';

export function makeStore(){
    const allReducers = combineReducers({
        databaseReducer: databaseReducer,
        uiReducer: uiReducer,
        customerReducer: customerReducer
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