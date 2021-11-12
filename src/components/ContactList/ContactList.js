import React from "react";
import "./ContactList.scss";
import ContactListItem from "./ContactListItem";
import { useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selector";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts)
  return (
    <ul className="Contact__list">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="Contact__item">
            <ContactListItem
              name={name}
              number={number}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;