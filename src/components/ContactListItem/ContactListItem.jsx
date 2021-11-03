import React from "react";
import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, removeItem, id }) => {
  return (
    <li className={s.item}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={removeItem}>
        Remove
      </button>
    </li>
  );
};

ContactListItem.propTypes = {};

export default ContactListItem;
