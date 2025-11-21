import { useEffect, useState } from "react";
import axios from "axios";

export default function Sheet() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;
  // Fetch all posts
  const fetchPosts = async () => {
    console.log("hello jix");

    try {
      const res = await axios.get(`${apiUrl}api/posts`);
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col  p-6 justify-start  gap-6">
        <h1 className=" text-4xl md:text-7xl font-playfair text-primary font-bold text-center pt-5">
        Performance Sheet
      </h1>
      <div className=" flex flex-wrap justify-center gap-4">
        {posts
        .filter((post) => post.category === "investment") // <-- Filter condition
        .map((post) => (
          <div
            key={post._id}
            className="w-full md:w-3/12 h-auto border-2 border-primary flex justify-center items-center rounded-2xl bg-secondary hover:shadow-lg"
          >
            <div className="p-4 rounded-lg">
              <img
                src={post.imageUrl}
                alt={post.category}
                className="w-full h-fit object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

     


    </div>
  );
}
