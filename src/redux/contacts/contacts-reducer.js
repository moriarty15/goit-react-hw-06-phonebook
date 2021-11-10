import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, handleFilterChange } from "./contacts-actions";

const itemsReducer = createReducer([], {
    [addContact]: (state, { payload }) => {
        if (state.some((e) => e.name.includes(payload.name))) {
        alert(`${payload.name} is already in contacts`);
        return state;
        }
        return [payload, ...state];
    },
    [deleteContact]: (state, { payload }) => {
        return state.filter((item) => item.id !== payload);
    }
})

const filterReducer = createReducer("", {
    [handleFilterChange]: (_, { payload }) => {
        return payload;
    }
})

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})