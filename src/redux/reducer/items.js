const initalState = {
    list: [],
    counter: 0,
    str: "init state"
};


export function items(state = initalState, action) {
    let newState = { ...state }

    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
                newState,
                list: action.payload,
                counter: state.counter++,
                str: "ya tut"

            };

        default:
            return newState ;
    }
}