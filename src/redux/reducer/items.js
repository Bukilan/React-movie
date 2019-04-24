const initalState = {
    list: [],
    method: "movie/popular",
    query: '',
};


export function items(state = initalState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                list: action.payload,
                method: action.payload_method,
                query: action.payload_query,
            };

        default:
            return state ;
    }
}