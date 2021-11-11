import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, handleFilterChange } from "./contacts-actions";

let contacts = null;
const locale = window.localStorage.getItem('contacts');
if (!locale) {
    contacts = [];
} else {
    contacts = JSON.parse(locale)
}

const itemsReducer = createReducer(contacts, {
    [addContact]: (state, { payload }) => {
        if (state.some((e) => e.name.includes(payload.name))) {
        alert(`${payload.name} is already in contacts`);
        return state;
        }
        window.localStorage.setItem('contacts', JSON.stringify([payload, ...state]))
        return [payload, ...state];
    },
    [deleteContact]: (state, { payload }) => {
        contacts = state.filter((item) => item.id !== payload);
        window.localStorage.setItem('contacts', JSON.stringify(contacts))
        return contacts
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