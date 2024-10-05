import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        alert("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on the search term for both name and username
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center text-lg">Loading...</div>;

  // Delete functionality
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUsers((prev) => prev.filter((user) => user.id !== id));
      } catch (error) {
        alert("Failed to delete user.");
      }
    }
  };

  return (
    <div className="max-w-6xl  mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 ">User List</h2>
      <h1>note -- to view userdetail click on the user name</h1>
      <input
        type="text"
        placeholder="Search by name or username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border bg-slate-100 rounded px-4 py-2 mb-4 w-full md:w-1/2 lg:w-1/3"
      />
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b text-left text-sm sm:text-base">
                Name
              </th>
              <th className="py-2 px-4 border-b text-left text-sm sm:text-base">
                Email
              </th>
              <th className="py-2 px-4 border-b text-left text-sm sm:text-base">
                Phone
              </th>
              <th className="py-2 px-4  border-b text-left text-sm sm:text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"}
                >
                  <td className="py-2 px-4 border-b">
                    <Link
                      to={`/users/${user.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {user.name}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.phone}</td>
                  <td className="py-2 px-4 border-b"><UserForm user={user} setUsers={setUsers} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;



