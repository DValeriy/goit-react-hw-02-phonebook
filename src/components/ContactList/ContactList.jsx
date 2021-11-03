import s from "./ContactList.module.css";

import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem";

const ContactList = ({ contacts, removeItem }) => {
  const markup = contacts.map(({ id, ...props }) => {
    return <ContactListItem key={id} {...props} removeItem={removeItem} />;
  });
  return <ul className={s.list}>{markup}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ContactList;
