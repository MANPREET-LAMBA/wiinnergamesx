import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Performance from "../servicepage/Performance";

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
  const navgatetool = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

   const [selectedImage, setSelectedImage] = useState(null);

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
                className="w-full md:w-3/12 h-auto border-2 bg-gradient-to-r from-pink-700 via-purple-700 to-sky-700 p-1 flex justify-center items-center rounded-xl bg-secondary hover:shadow-lg"
                onClick={() => setSelectedImage(post.imageUrl)}>
                <div className="p-4 rounded-xl bg-white">
                  <img
                    src={post.imageUrl}
                    alt={post.category}
                    className="w-full h-3/6 object-cover rounded-lg"
                  />
                </div>
              
            </div>
          ))}
      </div>



       {/* 🔥 THIS is how ImagePreview is used */}
      {selectedImage && (
        <Performance
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
