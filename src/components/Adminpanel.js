// import React, { useState } from "react";

// export default function Adminpanel() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   function handleImageChange(e) {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!title || !description) {
//       alert("Please fill all fields");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("image", image);

//     // Later you can send to backend:
//     // fetch('/api/posts', { method: 'POST', body: formData })
//     console.log("New Post Data:", { title, description, image });

//     alert("Post Created Successfully!");
//     setTitle("");
//     setDescription("");
//     setImage(null);
//     setPreview(null);
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="bg-white shadow-md rounded-2xl p-8 max-w-lg w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           🛠 Admin Panel — Create Blog Post
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Title */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               placeholder="Enter post title"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="6"
//               className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               placeholder="Write your content here..."
//             />
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Upload Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full border px-3 py-2 rounded-md"
//             />
//             {preview && (
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="mt-3 rounded-lg w-full h-48 object-cover border"
//               />
//             )}
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={() => {
//                 setTitle("");
//                 setDescription("");
//                 setImage(null);
//                 setPreview(null);
//               }}
//               className="px-4 py-2 border rounded-md hover:bg-gray-100"
//             >
//               Clear
//             </button>

//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Publish
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
