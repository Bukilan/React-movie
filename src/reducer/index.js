export default (state = [], action) => {
    if (action.type === 'RELOAD_MOVIES') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}