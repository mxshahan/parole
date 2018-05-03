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
            state.cat_content = action.data;
        // case 'SET_PAGE_CONTENT':
        //     let page_content = [];
        //     for (let i=action.data-1;i<=action.data+11;i++) {
        //         page_content.push(state.all[i])
        //     }
        //     return state.page_content;
    
        case 'MY_CONTENT':
            // state.mycontent = action.data;
            return state = {
                mycontent: action.data,
                ...state
            }
        case 'SINGLE_CONTENT':
            return state = {
                single: action.data,
                ...state.all,
                ...state.category,
                ...state.cat_content,
                ...state.mycontent
            }
        case 'GET_SINGLE': 
            return state.single = Object.values(state.all).map((value) => value._id === action.id);
        default:
            return state;
    }
}