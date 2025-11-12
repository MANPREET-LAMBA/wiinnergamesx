import React, { useState } from "react";
import axios from "axios";

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:3001/api/blogs", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("✅ Blog uploaded successfully!");
      setFormData({ title: "", description: "", image: null });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Create a Blog</h2>

        {/* Title */}
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mb-4 focus:ring focus:ring-blue-200"
          placeholder="Enter blog title"
        />

        {/* Description */}
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border rounded-lg p-3 mb-4 focus:ring focus:ring-blue-200"
          placeholder="Write your blog content here..."
        ></textarea>

        {/* Image Upload */}
        <label className="block mb-2 font-medium">Upload Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full mb-4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-full"
        >
          {loading ? "Uploading..." : "Post Blog"}
        </button>

        {/* Status Message */}
        {message && (
          <p className="text-center mt-4 font-medium text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
