import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import modalReducer from "./modal_reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    modal: modalReducer,
})

export default rootReducer;