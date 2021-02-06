import React, {useContext} from 'react';

import {UserContext} from '../../context/userContext';

const User = () => {
    const {state} = useContext(UserContext);
    return (
        <div>
            {
                state && state.user &&
                <div className="yFlex yPositionCenter">
                    <div className="xFlex">
                        <p className="dataLabel">Full Name: </p>
                        <p>{state.user.fullName && state.user.fullName}</p>
                    </div>
                    <div className="xFlex">
                        <p className="dataLabel">Short Name: </p>
                        <p>{state.user.shortName && state.user.shortName}</p>
                    </div>
                    <div className="xFlex">
                        <p className="dataLabel">User Name: </p>
                        <p>{state.user.username && state.user.username}</p>
                    </div>
                    <div className="xFlex">
                        <p className="dataLabel">Email: </p>
                        <p>{state.user.email && state.user.email}</p>
                    </div>
                    <div className="xFlex">
                        <p className="dataLabel">Date of Birth: </p>
                        <p>{state.user.dob && state.user.dob}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default User;