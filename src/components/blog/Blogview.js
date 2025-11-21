import { useNavigate } from "react-router";

export default function Blogview({ title, dis, image, id }) {
  const navigate = useNavigate();

  const viewHandler = () => {
    // navigate to detail page and pass blog ID in URL
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="w-full lg:w-1/5 h-auto rounded-2xl border-2 border-black bg-secondary  hover:shadow-lg "
      onClick={viewHandler}
    >
      <div className="p-4 rounded-lg ">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-2">{dis} </p>

        
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        
      </div>
    </div>
  );
}
