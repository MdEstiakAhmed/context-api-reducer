import React, { useContext } from 'react';
import {UserContext} from '../../context/userContext'

import userData from '../../assets/data/user.json';

const Navbar = () => {
    const {handleSetUser, handleUnsetUser, state} = useContext(UserContext);

    return (
        <div className="xFlex positionEnd yPositionCenter navbarContainer">
            {
                state && state.user && <p className="margin">{state.user.shortName}</p>
            }
            {
                !state.user && <button className="btn btnFont margin" onClick={() => handleSetUser(userData)}>Login</button>
            }
            {
                state && state.user && <button className="btn btnFont margin" onClick={handleUnsetUser}>Logout</button>
            }
        </div>
    );
};

export default Navbar;