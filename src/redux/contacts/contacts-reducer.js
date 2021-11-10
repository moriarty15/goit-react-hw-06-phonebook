import { combineReducers } from "redux";
import actionTypes from "./contacts-types"

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADDCONTACT:
      if (state.some((e) => e.name.includes(payload.name))) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return [payload, ...state];
    case actionTypes.DELETECONTACT:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})