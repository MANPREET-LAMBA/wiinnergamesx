import { useState, useEffect } from "react";
import axios from "axios";
import Blogview from "./Blogview";

export default function Blog() {
  const [blogitem, setBlogitem] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/blogs");
        console.log("Fetched blogs:", res.data);

        if (Array.isArray(res.data)) {
          setBlogitem(res.data);
          setFilteredBlogs(res.data);
        } else {
          console.error("Expected array but got:", typeof res.data, res.data);
          setBlogitem([]);
          setFilteredBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 🔍 Filter blogs when user types
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredBlogs(blogitem);
    } else {
      const lowerSearch = search.toLowerCase();
      const filtered = blogitem.filter(
        (b) =>
          b.title.toLowerCase().includes(lowerSearch) ||
          b.description.toLowerCase().includes(lowerSearch) ||
          b.month.toLowerCase().includes(lowerSearch) 
      );
      setFilteredBlogs(filtered);
    }
  }, [search, blogitem]);

  if (loading) {
    return <p className="p-10">Loading blogs...</p>;
  }

  return (
    <div className="p-10">
      {/* 🔍 Search Bar */}
      <div className="mb-6 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search blogs by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* 📰 Blog List */}
      <div className="flex flex-wrap justify-start gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((e) => {
            // 🧠 Shorten description to 30 words
            const shortDesc = e.description
              .split(" ")
              .slice(0, 30)
              .join(" ") + (e.description.split(" ").length > 30 ? "..." : "");

            return (
              <Blogview
                key={e._id}
                id={e._id}
                title={e.title}
                dis={shortDesc}
                image={e.image}
              />
            );
          })
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}
