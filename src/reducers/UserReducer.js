export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export const handleAction = (dispatch) => ({
    handleSetUser: (value) => dispatch({
        type: SET_USER,
        payload: value
    }),
    handleUnsetUser: () => dispatch({
        type: UNSET_USER,
    })
});

const UserReducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case UNSET_USER:
            return {};
        default:
            return state;
    }
}

export default UserReducer;