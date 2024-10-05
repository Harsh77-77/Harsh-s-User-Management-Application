// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = ({ user, setUsers }) => {
//   const [formData, setFormData] = useState(user || {
//     name: '',
//     email: '',
//     phone: '',
//     username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//     address: { street: '', city: '' },
//     company: { name: '' },
//     website: ''
//   });
//   const [isEditing, setIsEditing] = useState(!!user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('address')) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name.split('.')[1]]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response;
//       if (isEditing) {
//         response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData);
//       } else {
//         response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
//       }
//       setUsers(prev => isEditing ? prev.map(u => u.id === user.id ? response.data : u) : [...prev, response.data]);
//       setFormData({ name: '', email: '', phone: '', username: `USER-${Math.random().toString(36).substring(2, 7)}`, address: { street: '', city: '' }, company: {}, website: '' });
//     } catch (error) {
//       alert("Failed to save user.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
//       <input name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
//       <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" />
//       <input name="username" value={formData.username} readOnly />
//       <input name="address.street" value={formData.address.street} onChange={handleChange} required placeholder="Street" />
//       <input name="address.city" value={formData.address.city} onChange={handleChange} required placeholder="City" />
//       <input name="company.name" value={formData.company.name} onChange={handleChange} placeholder="Company Name" />
//       <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
//       <button type="submit">{isEditing ? "Update" : "Create"} User</button>
//     </form>
//   );
// };

// export default UserForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserForm = ({ user, setUsers, handleClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//     address: { street: '', city: '' },
//     company: { name: '' },
//     website: ''
//   });

//   const isEditing = Boolean(user);

//   useEffect(() => {
//     if (isEditing) {
//       // Populate the form with the user data for editing
//       setFormData({
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         username: user.username, // Should remain the same
//         address: { street: user.address.street, city: user.address.city },
//         company: { name: user.company.name },
//         website: user.website
//       });
//     }
//   }, [isEditing, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('address')) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name.split('.')[1]]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response;
//       if (isEditing) {
//         // Perform a PUT request to update the user
//         response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData);
//       } else {
//         // Perform a POST request to create a new user
//         response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
//       }
//       setUsers(prev => isEditing
//         ? prev.map(u => (u.id === user.id ? response.data : u))
//         : [...prev, response.data]
//       );
//       handleClose(); // Close the form/modal after submission
//     } catch (error) {
//       alert("Failed to save user.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
//       <input name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
//       <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" />
//       <input name="username" value={formData.username} readOnly />
//       <input name="address.street" value={formData.address.street} onChange={handleChange} required placeholder="Street" />
//       <input name="address.city" value={formData.address.city} onChange={handleChange} required placeholder="City" />
//       <input name="company.name" value={formData.company.name} onChange={handleChange} placeholder="Company Name" />
//       <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
//       <button type="submit">{isEditing ? "Update" : "Create"} User</button>
//     </form>
//   );
// };

// export default UserForm;

// tailwind

// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = ({ user, setUsers }) => {
//   const [formData, setFormData] = useState(user || {
//     name: '',
//     email: '',
//     phone: '',
//     username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//     address: { street: '', city: '' },
//     company: { name: '' },
//     website: ''
//   });
//   const [isEditing, setIsEditing] = useState(!!user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('address')) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name.split('.')[1]]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response;
//       if (isEditing) {
//         response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData);
//       } else {
//         response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
//       }
//       setUsers(prev => isEditing ? prev.map(u => u.id === user.id ? response.data : u) : [...prev, response.data]);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//         address: { street: '', city: '' },
//         company: {},
//         website: ''
//       });
//     } catch (error) {
//       alert("Failed to save user.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         placeholder="Name"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         placeholder="Email"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//         placeholder="Phone"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="username"
//         value={formData.username}
//         readOnly
//         className="w-full border border-gray-300 p-2 rounded bg-gray-200 cursor-not-allowed"
//       />
//       <input
//         name="address.street"
//         value={formData.address.street}
//         onChange={handleChange}
//         required
//         placeholder="Street"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="address.city"
//         value={formData.address.city}
//         onChange={handleChange}
//         required
//         placeholder="City"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="company.name"
//         value={formData.company.name}
//         onChange={handleChange}
//         placeholder="Company Name"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="website"
//         value={formData.website}
//         onChange={handleChange}
//         placeholder="Website"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//       >
//         {isEditing ? "Update" : "Create"} User
//       </button>
//     </form>
//   );
// };

// export default UserForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = ({ user, setUsers }) => {
//   const [formData, setFormData] = useState(user || {
//     name: '',
//     email: '',
//     phone: '',
//     username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//     address: { street: '', city: '' },
//     company: { name: '' },
//     website: ''
//   });
//   const [isEditing, setIsEditing] = useState(!!user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('address')) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name.split('.')[1]]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response;
//       if (isEditing) {
//         response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData);
//       } else {
//         response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
//       }
//       setUsers(prev => isEditing ? prev.map(u => u.id === user.id ? response.data : u) : [...prev, response.data]);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//         address: { street: '', city: '' },
//         company: {},
//         website: ''
//       });
//     } catch (error) {
//       alert("Failed to save user.");
//     }
//   };

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       try {
//         await axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`);
//         setUsers(prev => prev.filter(u => u.id !== user.id));
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//           address: { street: '', city: '' },
//           company: {},
//           website: ''
//         });
//       } catch (error) {
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         placeholder="Name"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         placeholder="Email"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//         placeholder="Phone"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="username"
//         value={formData.username}
//         readOnly
//         className="w-full border border-gray-300 p-2 rounded bg-gray-200 cursor-not-allowed"
//       />
//       <input
//         name="address.street"
//         value={formData.address.street}
//         onChange={handleChange}
//         required
//         placeholder="Street"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="address.city"
//         value={formData.address.city}
//         onChange={handleChange}
//         required
//         placeholder="City"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="company.name"
//         value={formData.company.name}
//         onChange={handleChange}
//         placeholder="Company Name"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="website"
//         value={formData.website}
//         onChange={handleChange}
//         placeholder="Website"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//       >
//         {isEditing ? "Update" : "Create"} User
//       </button>
//       {isEditing && (
//         <button
//           type="button"
//           onClick={handleDelete}
//           className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
//         >
//           Delete User
//         </button>
//       )}
//     </form>
//   );
// };

// export default UserForm;

import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ user, setUsers }) => {
  const [formData, setFormData] = useState(
    user || {
      name: "",
      email: "",
      phone: "",
      username: `USER-${Math.random().toString(36).substring(2, 7)}`,
      address: { street: "", city: "" },
      company: { name: "" },
      website: "",
    }
  );
  const [isEditing, setIsEditing] = useState(!!user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address")) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name.split(".")[1]]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isEditing) {
        response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          formData
        );
      } else {
        response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          formData
        );
      }
      setUsers((prev) =>
        isEditing
          ? prev.map((u) => (u.id === user.id ? response.data : u))
          : [...prev, response.data]
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        username: `USER-${Math.random().toString(36).substring(2, 7)}`,
        address: { street: "", city: "" },
        company: {},
        website: "",
      });
    } catch (error) {
      alert("Failed to save user.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/users/${user.id}`
        );
        setUsers((prev) => prev.filter((u) => u.id !== user.id));
        setFormData({
          name: "",
          email: "",
          phone: "",
          username: `USER-${Math.random().toString(36).substring(2, 7)}`,
          address: { street: "", city: "" },
          company: {},
          website: "",
        });
      } catch (error) {
        alert("Failed to delete user.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-[#e6e8ea] lg:grid lg:grid-cols-2 rounded-lg shadow-md max-w-md  lg:w-[600px] mx-auto "
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="w-full border bg-[#e4edf7] border-gray-300 p-2 rounded"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full border bg-[#e4edf7] border-gray-300 p-2 rounded"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="Phone"
        className="w-full border bg-[#e4edf7] border-gray-300 p-2 rounded"
      />
      <input
        name="username"
        value={formData.username}
        readOnly
        className="w-full border  border-gray-300 p-2 rounded bg-gray-200 cursor-not-allowed"
      />
      <input
        name="address.street"
        value={formData.address.street}
        onChange={handleChange}
        required
        placeholder="Street"
        className="w-full border bg-[#e4edf7] border-gray-300 p-2 rounded"
      />
      <input
        name="address.city"
        value={formData.address.city}
        onChange={handleChange}
        required
        placeholder="City"
        className="w-full border  bg-[#e4edf7] border-gray-300 p-2 rounded"
      />
      <input
        name="company.name"
        value={formData.company.name}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full border bg-[#e4edf7] border-gray-300 p-2 rounded"
      />
      <input
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Website"
        className="w-full border bg-[#e4edf7] border-gray-300 p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        {isEditing ? "Update" : "Create"} User
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={handleDelete}
          className="w-full  bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Delete User
        </button>
      )}
    </form>
  );
};

export default UserForm;

// responsive

// import React, { useState } from 'react';
// import axios from 'axios';

// const UserForm = ({ user, setUsers }) => {
//   const [formData, setFormData] = useState(user || {
//     name: '',
//     email: '',
//     phone: '',
//     username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//     address: { street: '', city: '' },
//     company: { name: '' },
//     website: ''
//   });
//   const [isEditing, setIsEditing] = useState(!!user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith('address')) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name.split('.')[1]]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response;
//       if (isEditing) {
//         response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData);
//       } else {
//         response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
//       }
//       setUsers(prev => isEditing ? prev.map(u => u.id === user.id ? response.data : u) : [...prev, response.data]);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//         address: { street: '', city: '' },
//         company: {},
//         website: ''
//       });
//     } catch (error) {
//       alert("Failed to save user.");
//     }
//   };

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       try {
//         await axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`);
//         setUsers(prev => prev.filter(u => u.id !== user.id));
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           username: `USER-${Math.random().toString(36).substring(2, 7)}`,
//           address: { street: '', city: '' },
//           company: {},
//           website: ''
//         });
//       } catch (error) {
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto grid grid-cols-1 gap-4">
//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         placeholder="Name"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         placeholder="Email"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//         placeholder="Phone"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="username"
//         value={formData.username}
//         readOnly
//         className="w-full border border-gray-300 p-2 rounded bg-gray-200 cursor-not-allowed"
//       />
//       <input
//         name="address.street"
//         value={formData.address.street}
//         onChange={handleChange}
//         required
//         placeholder="Street"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="address.city"
//         value={formData.address.city}
//         onChange={handleChange}
//         required
//         placeholder="City"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="company.name"
//         value={formData.company.name}
//         onChange={handleChange}
//         placeholder="Company Name"
//         className="w-full border border-gray-300 p-2 rounded"
//       />
//       <input
//         name="website"
//         value={formData.website}
//         onChange={handleChange}
//         placeholder="Website"
//         className="w-full border border-gray-300 p-2 rounded"
//       />

//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//       >
//         {isEditing ? "Update" : "Create"} User
//       </button>
//       {isEditing && (
//         <button
//           type="button"
//           onClick={handleDelete}
//           className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
//         >
//           Delete User
//         </button>
//       )}
//     </form>
//   );
// };

// export default UserForm;
