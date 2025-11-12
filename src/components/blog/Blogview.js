import { useNavigate } from "react-router";

export default function Blogview({ title, dis, image, id }) {
  const navigate = useNavigate();

  const viewHandler = () => {
    // navigate to detail page and pass blog ID in URL
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="w-full md:w-1/5 h-auto rounded-2xl bg-secondary cursor-pointer hover:shadow-lg transition-all"
      onClick={viewHandler}
    >
      <div className="border p-4 mb-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-2">{dis} </p>

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
