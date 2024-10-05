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
      className="space-y-4 p-4  lg:grid lg:grid-cols-2 rounded-lg shadow-md max-w-md  lg:w-[600px] mx-auto "
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="w-full border  border-gray-300 p-2 rounded"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full border  border-gray-300 p-2 rounded"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="Phone"
        className="w-full border  border-gray-300 p-2 rounded"
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
        className="w-full border  border-gray-300 p-2 rounded"
      />
      <input
        name="address.city"
        value={formData.address.city}
        onChange={handleChange}
        required
        placeholder="City"
        className="w-full border   border-gray-300 p-2 rounded"
      />
      <input
        name="company.name"
        value={formData.company.name}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full border  border-gray-300 p-2 rounded"
      />
      <input
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Website"
        className="w-full border  border-gray-300 p-2 rounded"
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