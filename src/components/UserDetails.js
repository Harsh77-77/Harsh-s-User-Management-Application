// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const UserDetails = () => {
//   const { id } = useParams(); // Get the user ID from the URL
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//         setUser(response.data);
//       } catch (error) {
//         alert("Failed to fetch user details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserDetails();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!user) return <div>User not found.</div>;

//   return (
//     <div>
//       <h2>User Details</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Username:</strong> {user.username}</p>
//       <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
//       <p><strong>Company:</strong> {user.company.name}</p>
//       <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

//       <Link to="/">Back to User List</Link>
//     </div>
//   );
// };

// export default UserDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const UserDetails = () => {
//   const { id } = useParams(); // Get the user ID from the URL
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//         setUser(response.data);
//       } catch (error) {
//         alert("Failed to fetch user details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserDetails();
//   }, [id]);

//   if (loading) return <div className="text-center text-lg">Loading...</div>;
//   if (!user) return <div className="text-center text-lg">User not found.</div>;

//   return (
//     <div className="max-w-2xl mx-auto  p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-3xl font-bold mb-4">User Details</h2>
//       <p className="mb-2">
//         <strong className="font-semibold">Name:</strong> {user.name}
//       </p>
//       <p className="mb-2">
//         <strong className="font-semibold">Email:</strong> {user.email}
//       </p>
//       <p className="mb-2">
//         <strong className="font-semibold">Phone:</strong> {user.phone}
//       </p>
//       <p className="mb-2">
//         <strong className="font-semibold">Username:</strong> {user.username}
//       </p>
//       <p className="mb-2">
//         <strong className="font-semibold">Address:</strong> {user.address.street}, {user.address.city}
//       </p>
//       <p className="mb-2">
//         <strong className="font-semibold">Company:</strong> {user.company.name}
//       </p>
//       <p className="mb-4">
//         <strong className="font-semibold">Website:</strong>
//         <a
//           href={`http://${user.website}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           {user.website}
//         </a>
//       </p>

//       <Link
//         to="/"
//         className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//       >
//         Back to User List
//       </Link>
//     </div>
//   );
// };

// export default UserDetails;

// responsive

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        alert("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [id]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (!user) return <div className="text-center text-lg">User not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">User Details</h2>
      <p className="mb-2 text-sm sm:text-base">
        <strong className="font-semibold">Name:</strong> {user.name}
      </p>
      <p className="mb-2 text-sm sm:text-base">
        <strong className="font-semibold">Email:</strong> {user.email}
      </p>
      <p className="mb-2 text-sm sm:text-base">
        <strong className="font-semibold">Phone:</strong> {user.phone}
      </p>
      <p className="mb-2 text-sm sm:text-base">
        <strong className="font-semibold">Username:</strong> {user.username}
      </p>
      <p className="mb-2 text-sm sm:text-base">
        <strong className="font-semibold">Address:</strong>{" "}
        {user.address.street}, {user.address.city}
      </p>
      <p className="mb-2 text-sm sm:text-base">
        <strong className="font-semibold">Company:</strong> {user.company.name}
      </p>
      <p className="mb-4 text-sm sm:text-base">
        <strong className="font-semibold">Website:</strong>
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </p>

      <Link
        to="/"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back to User List
      </Link>
    </div>
  );
};

export default UserDetails;
