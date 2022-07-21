import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { loginreducer } from "./Login/Loginreducer";
import { signupreducer } from "./Signup/Signupreducer";
const rootreducer=combineReducers({signin:signupreducer,login:loginreducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
