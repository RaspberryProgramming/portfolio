import { combineReducers } from "redux";

import githubReducer from './githubReducer';
import contactModalReducer from "./contactModalReducer";
import introReducer from "./introReducer";
import articlesReducer from "./articlesReducer";

export default combineReducers({
    github: githubReducer,
    contactModal: contactModalReducer,
    intro: introReducer,
    articles: articlesReducer,
});
