import { combineReducers } from "redux";

import githubReducer from './githubReducer';
import contactModalReducer from "./contactModalReducer";
import introReducer from "./introReducer";
import navigationReducer from "./navigationReducer";
import articlesReducer from "./articlesReducer";
import modelReducer from "./modelReducer";

export default combineReducers({
    github: githubReducer,
    contactModal: contactModalReducer,
    intro: introReducer,
    navigation: navigationReducer,
    articles: articlesReducer,
    model: modelReducer,
});
