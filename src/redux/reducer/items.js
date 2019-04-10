const initalState = {
    list: [],
    counter: 0,
    str: "init state"
};


export function items(state = initalState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                list: action.payload,
                counter: state.counter++,
                str: "ya tut"

            };

        default:
            return state ;
    }
}