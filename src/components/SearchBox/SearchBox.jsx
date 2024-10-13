// import css from "./SearchBox.module.css";
// import { useId } from "react";

// export default function SearchBox ({ value, handleChange }) {
//   const searchBoxId = useId();
//   return (
//     <div className={css.search_box}>
//       <label htmlFor={searchBoxId}>Find contacts by name</label>
//       <input
//         type="text"
//         name="search"
//         id={searchBoxId}
//         value={value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };
import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilters } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchBoxId = useId();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilters(e.target.value));
  };

  return (
    <form className={css.search_box}>
      <label htmlFor={searchBoxId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchBoxId}
        onChange={handleChange}
      />
    </form>
  );
}
