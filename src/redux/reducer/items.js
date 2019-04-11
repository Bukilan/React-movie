const initalState = {
    list: [],
};


export function items(state = initalState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                list: action.payload,

            };

        default:
            return state ;
    }
}