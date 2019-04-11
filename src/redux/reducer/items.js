const initalState = {
    list: [],
    counter_plus: 1,
    counter_min: 0,
};


export function items(state = initalState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                list: action.payload,
                counter_plus: state.counter_plus + 1,
                counter_min: state.counter_min + 1,

            };

        default:
            return state ;
    }
}