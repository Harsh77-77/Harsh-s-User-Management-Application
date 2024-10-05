// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import UserForm from './UserForm';
// import { Link } from 'react-router-dom';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data);
//       } catch (error) {
//         alert("Failed to fetch users.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   if (loading) return <div>Loading...</div>;

// //delete
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       try {
//         await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
//         setUsers(prev => prev.filter(user => user.id !== id));
//       } catch (error) {
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//         <tr key={user.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
//               <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>
//                 <UserForm user={user} setUsers={setUsers} />
//                 {/* Add delete functionality here */}

// // In UserList component render method:
// <td>
//   <button onClick={() => handleDelete(user.id)}>Delete</button>
//   <UserForm user={user} setUsers={setUsers} />
// </td>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import UserForm from './UserForm';
// import { Link } from 'react-router-dom';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data);
//       } catch (error) {
//         alert("Failed to fetch users.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Filter users based on the search term for both name and username
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <div>Loading...</div>;

//   // Delete functionality
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       try {
//         await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
//         setUsers(prev => prev.filter(user => user.id !== id));
//       } catch (error) {
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <input
//         type="text"
//         placeholder="Search by name or username"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user, index) => (
//               <tr key={user.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
//                 <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>
//                   <button onClick={() => handleDelete(user.id)}>Delete</button>
//                   {/* UserForm should be triggered in a modal or separate route */}
//                   <UserForm user={user} setUsers={setUsers} />
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No users found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import UserForm from './UserForm';
// import { Link } from 'react-router-dom';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data);
//       } catch (error) {
//         alert("Failed to fetch users.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Filter users based on the search term for both name and username
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <div className="text-center text-lg">Loading...</div>;

//   // Delete functionality
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       try {
//         await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
//         setUsers(prev => prev.filter(user => user.id !== id));
//       } catch (error) {
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-3xl font-bold mb-4">User List</h2>
//       <input
//         type="text"
//         placeholder="Search by name or username"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border rounded px-4 py-2 mb-4 w-full"
//       />
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 ">
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Phone</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user, index) => (
//               <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                 <td className="py-2 px-4 border-b">
//                   <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">{user.name}</Link>
//                 </td>
//                 <td className="py-2 px-4 border-b">{user.email}</td>
//                 <td className="py-2 px-4 border-b">{user.phone}</td>
//                 <td className="py-2 px-4 border-b">

//                   {/* UserForm should be triggered in a modal or separate route */}
//                   <UserForm user={user} setUsers={setUsers} />
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="text-center py-4">No users found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;

// responsive

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
    <div className="max-w-6xl mx-auto p-6 bg-[#c4cfd9]  shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 ">User List</h2>
      <h1>note -- to view userdetail click on the user name</h1>
      <input
        type="text"
        placeholder="Search by name or username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border bg-slate-200 rounded px-4 py-2 mb-4 w-full md:w-1/2 lg:w-1/3"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
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
              <th className="py-2 px-4 border-b text-left text-sm sm:text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "bg-[#98b3cd]" : "bg-[#a8d2ca]"}
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
                  <td className="py-2 px-4 border-b">
                    {/* UserForm should be triggered in a modal or separate route */}
                    <UserForm user={user} setUsers={setUsers} />
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
