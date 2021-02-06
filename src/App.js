import React from 'react';

import { UserProvider } from './context/userContext'

import Main from "./pages/Main";

const App = () => {
    return (
        <>
            <UserProvider>
                <Main />
            </UserProvider>
        </>
    );
}

export default App;
