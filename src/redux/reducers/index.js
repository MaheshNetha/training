import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { profileReducer } from "./profile.reducer";
import { ipoReducer } from "./nseipo.reducer";

const reducers = combineReducers({
    authentication: authentication,
    profile: profileReducer,
    ipos : ipoReducer
});

export default reducers