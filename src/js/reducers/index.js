import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: []
};
const rootReducer = (state = initialState, action) => {
    const articles = Object.assign([], state.articles)
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case DELETE_ARTICLE:
            const index = articles.findIndex(article => {
                return article.id == action.payload
            })
            articles.splice(index, 1)
            return { articles: articles };
        case EDIT_ARTICLE:
            const data = articles.map(article => {
                return article.id === action.payload.id ? action.payload : article;
            });
            return { articles: data };
        default:
            return state;
    }
};
export default rootReducer;