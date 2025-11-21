import { useState } from "react";


import Postsheet from "./Postsheet";
import BlogForm from "../blog/Blogform";

export default function FormDisplay() {
  const [activeForm, setActiveForm] = useState("blog"); // default

  return (
    <div className="max-w-xl mx-auto mt-10">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveForm("blog")}
          className={`px-4 py-2 rounded ${
            activeForm === "blog" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Blog Form
        </button>

        <button
          onClick={() => setActiveForm("post")}
          className={`px-4 py-2 rounded ${
            activeForm === "post" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Post Form
        </button>
      </div>

      {/* Show Blog Form */}
      {activeForm === "blog" && <BlogForm/>}

      {/* Show Post Form */}
      {activeForm === "post" && <Postsheet />}
    </div>
  );
}
