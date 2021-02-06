import React from 'react';

import General from '../components/general/General';
import Navbar from '../components/navbar/Navbar';
import User from '../components/user/User';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <General/>
            <User/>
        </div>
    );
};

export default Main;