import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import modalReducer from "./modal_reducer";
import savesReducer from "./saves_reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    modal: modalReducer,
    savedListings: savesReducer,
})

export default rootReducer;