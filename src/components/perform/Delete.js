import axios from "axios";
import { useEffect,useState } from "react";
import ServiceCards from "../servicepage/ServiceCards";
import { useNavigate } from "react-router";

export default function Delete() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data,dataset] = useState([])
    const [post,setPosts] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const result = await axios.get(`${apiUrl}api/blogs`);
            console.log(result.data);
            
            
            dataset(result.data)
        } catch (error) {
            console.error(error);
            alert("Upload failed");
        }
    };

     fetchPosts();

    }, [])
    

    const deletepost = async (id) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}api/blogs/${id}`);

            alert("Post deleted!");
            console.log(res.data);
            navigate(0);



        // // ✅ remove post from UI instantly
        // setPosts(prev => prev.filter(post => post._id !== id));
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("post not deleted ");
        }

       
    }
    return (
        <div>
            {
                data.map((e)=>(
                    <div className="flex border-2 border-primary rounded-lg my-3" onClick={()=>{deletepost(e._id)}}>
                        <div>
                            <img className="w-52 h-40 m-2 rounded-lg" src={e.image}/>
                        </div>
                        <div className="m-3">
                            <div>
                                <h1>{e.title}</h1>
                                <h2>{e.month}</h2>
                            </div>
                            <div>
                                <button className="w-fit h-fit p-2 px-4 rounded-lg text-white bg-primary">Delete</button>
                            </div>    
                        </div>
                    </div>
                ))
                   
                
            }
        </div>
    )
}