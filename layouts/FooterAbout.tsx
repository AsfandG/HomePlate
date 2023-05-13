import Image from "next/image";
import React from "react";
import { Contact } from "../types";
import ContactListItem from "../components/ContactListItem";
interface IFooterProps {
  contact: Contact[];
}
const FooterAbout = ({ contact }: IFooterProps) => {
  return (
    <div>
      <div className="footer-logo">
        <Image
          src="/images/footer-toast.png"
          width={58}
          height={46}
          alt="Footer-logo"
        />
        <Image
          src="/images/footer-text.png"
          width={156}
          height={30}
          alt="Footer-logo"
        />
      </div>

      <ul className="contacts">
        {contact.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default FooterAbout;
