// import { useEffect, useState } from "react";
// import "./App.css";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContact = window.localStorage.getItem("saved-contact");

//     if (savedContact !== null) {
//       return JSON.parse(savedContact);
//     }

//     return [];
//   });
//   const [searchContact, setSearchContact] = useState("");

//   useEffect(() => {
//     window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
//   }, [contacts]);
//   const handleChange = (e) => {
//     setSearchContact(e.target.value);
//   };

//   const addContact = (newContact) => {
//     setContacts((prev) => {
//       return [...prev, newContact];
//     });
//   };

//   const deleteContact = (contactId) => {
//     setContacts((prev) => {
//       return prev.filter((contact) => contact.id !== contactId);
//     });
//   };

//   const contactToRender = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchContact.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox handleChange={handleChange} value={searchContact} />
//       <ContactList contacts={contactToRender} onDelete={deleteContact} />
//     </div>
//   );
// }

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { lazy, useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const PhonebookPage = lazy(() => import("./pages/Phonebook"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Routes>
    </SharedLayout>
  );
}
