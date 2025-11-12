import inestment from "./photo/If you are worried about the current economic….png"
export default function Card(prop){
     console.log(prop)
    return(
       
        
        <div className="w-64 h-fit  ">
            <img src={prop.image} className="rounded-2xl w-64  "/>
        </div>
    )
}