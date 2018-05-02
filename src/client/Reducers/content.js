export default (state = {}, action) => {
    switch(action.type){
        case 'SET_CONTENT':
            return state = {
                all: action.data,
                ...state
            }
        case 'SET_CATEGORY':
            return state = {
                category: action.data,
                ...state
            }
        
        case 'SET_CATEGORY_CONTENT':
            return state = {
                cat_content: action.data,
                ...state
            }
        case 'SINGLE_CONTENT':
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