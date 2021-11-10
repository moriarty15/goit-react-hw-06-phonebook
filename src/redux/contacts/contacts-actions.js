import { v4 as uuidv4 } from "uuid";
import actionTypes from "./contacts-types"

export const addContact = (value) => ({
    type: actionTypes.ADDCONTACT,
    payload: {
        name: value.name,
        number: value.number,
        id: uuidv4()
    },
});

export const deleteContact = (contactId) => ({
    type: actionTypes.DELETECONTACT,
    payload: contactId,
})

export const handleFilterChange = (e) => ({
    type: actionTypes.FILTER,
    payload: e.currentTarget.value    
})
