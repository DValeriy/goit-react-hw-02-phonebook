import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ handleFilter, value }) => {
  return (
    <div className={s.input}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filterWord"
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
