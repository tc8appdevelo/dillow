import { combineReducers } from "redux";
import session_reducer from "./session_reducer";

export default combineReducers ({
    session: session_reducer,
})


