const initialState = {
    data: {
    name: '',
    },
    };
    const nameReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_NAME': {
    return {
    ...state,
    data: action.data,
    };
    }
    default: {
    return state;
    }
    }
    };
    export default nameReducer;