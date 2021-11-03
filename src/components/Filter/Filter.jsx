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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
