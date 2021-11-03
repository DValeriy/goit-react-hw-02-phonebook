import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem";

const ContactList = ({ contacts, filter, removeItem }) => {
  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  const markup = filteredContacts.map(({ id, ...props }) => {
    return <ContactListItem key={id} {...props} removeItem={removeItem} />;
  });
  return <ul className={s.list}>{markup}</ul>;
};

ContactList.propTypes = {};

export default ContactList;
