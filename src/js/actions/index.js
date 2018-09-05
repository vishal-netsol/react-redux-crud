import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const delArticle = id => ({ type: DELETE_ARTICLE, payload: id });
export const editArticle = article => ({ type: EDIT_ARTICLE, payload: article });