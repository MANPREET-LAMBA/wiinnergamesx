import { useState } from "react";
import axios from "axios";

export default function PostForm() {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.post(`${apiUrl}api/posts`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Post uploaded!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 mx-auto mt-10 space-y-5"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Upload Post
      </h2>

      {/* Category Dropdown */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-700 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="investment">Investment</option>
          <option value="trading">Trading</option>
          <option value="f&o">F&O</option>
        </select>
      </div>

      {/* Image Input */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-700 font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 
          file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-blue-600 
          file:text-white file:rounded-lg cursor-pointer"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </form>
  );
}
