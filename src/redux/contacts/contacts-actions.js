import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(
  "contact/addContact",
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

export const deleteContact = createAction("contact/deleteContact");
export const handleFilterChange = createAction("contact/filter");
