import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <Router>
      <div className="">
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