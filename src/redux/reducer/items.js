const initalState = {
    list: []
};


export function items(state = initalState, action) {
    const newState = { ...state};

    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.list;

        default:
            return newState;
    }
}
