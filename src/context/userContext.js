import React, { createContext, useReducer } from 'react';
import UserReducer, {handleAction} from '../reducers/UserReducer';

const UserContext = createContext();

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, {});
    const actions = handleAction(dispatch);
    return (
        <UserContext.Provider value={{state, ...actions}}>
            {props.children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};