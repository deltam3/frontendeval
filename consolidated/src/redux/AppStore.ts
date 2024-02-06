import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ConsolidatedReducer, {
  ConsolidatedStatesType,
} from "./ConsolidatedReducer";

export type RootStatesType = {
  consolidated: ConsolidatedStatesType;
};

const RootReducer = combineReducers({
  consolidated: ConsolidatedReducer,
});

const AppStore = configureStore({ reducer: RootReducer });
export default AppStore;
