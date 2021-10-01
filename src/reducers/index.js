import { combineReducers } from "redux";

import githubReducer from './githubReducer';
import contactModalReducer from "./contactModalReducer";
import introReducer from "./introReducer";
import navigationReducer from "./navigationReducer";

export default combineReducers({
    github: githubReducer,
    contactModal: contactModalReducer,
    intro: introReducer,
    navigation: navigationReducer,
});
