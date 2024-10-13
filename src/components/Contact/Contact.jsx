// import css from "./Contact.module.css";
// import { IoPerson } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";

// export default function Contact ({ name, number, id, onDelete }) {
//   return (
//     <div className={css.contact_box}>
//       <ul className={css.contact_list}>
//         <li>
//           <IoPerson /> {name}
//         </li>
//         <li>
//           <FaPhone /> {number}
//         </li>
//       </ul>
//       <button
//         onClick={() => {
//           onDelete(id);
//         }}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export default function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact_box}>
      <ul className={css.contact_list}>
        <li>
          <IoPerson /> {name}
        </li>
        <li>
          <FaPhone /> {phone}
        </li>
      </ul>
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
