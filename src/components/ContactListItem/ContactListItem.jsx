import s from "./ContactListItem.module.css";

import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, removeItem }) => {
  const cbOnRemove = () => {
    removeItem(name);
  };
  return (
    <li className={s.item}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={cbOnRemove}>
        Remove
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ContactListItem;
