export const initialState = {
    basket: [],
    user: {}
};

function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case "Add_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            return { ...state };
        default:
            return state;
    }
};

export default reducer;