import { combineReducers } from "redux";

import githubReducer from './githubReducer';
import contactModalReducer from "./contactModalReducer";

export default combineReducers({
    github: githubReducer,
    contactModal: contactModalReducer,
});
