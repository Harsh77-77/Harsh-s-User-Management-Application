import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <Router>
      <div className="bg-[#b7c2cc]">
        <h1 className="text-5xl   text-center">User Management</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



{
  /* <Route path="/" element={<UserList />} /> {/* Home view */
}
//   <Route path="/users/:id" element={<UserDetails />} /> {/* Detailed view */}
//   <Route path="/add-user" element={<UserForm />} /> {/* Route for adding a new user */}
//   <Route path="/edit-user/:id" element={<UserForm />} />  */}
//   Route for editing a user
