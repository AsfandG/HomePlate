import React from "react";
import { Contact } from "../types";

const ContactListItem = ({ contact }: { contact: Contact }) => {
  return (
    <li className="contacts__listItem">
      <h5 className="contacts__listItem--heading">{contact.heading}:</h5>
      <span className="contacts__listItem--text">{contact.text}</span>
    </li>
  );
};

export default ContactListItem;
