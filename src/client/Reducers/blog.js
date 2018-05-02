export default (state = {}, action) => {
    switch(action.type){
        case 'SET_BLOG':
            return state = {
                all: action.data,
                ...state
            }
        case 'SINGLE_BLOG':
            return state = {
                single: action.data,
                ...state
            }
        case 'GET_SINGLE': 
            return state.single = Object.values(state.all).map((value) => value._id === action.id);
        default:
            return state;
    }
}