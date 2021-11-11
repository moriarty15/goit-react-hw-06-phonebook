import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
import {ADDCONTACT, DELETECONTACT, FILTER} from "./contacts-types"

export const addContact = createAction(
  ADDCONTACT,
  ({ name, number }) => {
    return {
        payload: {
            name,
            number,
            id: uuidv4()
        },
    };
  }
);

export const deleteContact = createAction(DELETECONTACT);
export const handleFilterChange = createAction(FILTER);
