import '../index.css'

export default function Cardservice({ service, title }) {
    return (

        <div className=" w-full border-2 border-primary lg:w-3/12 h-fit py-5 px-3 mx-4 lg:h-72 rounded-xl bg-secondary">

            <h1 className="text-3xl text-primary font-playfair  font-bold">{title} </h1>
            <ul className="list-disc list-outside mx-5 text-start text-xl pt-4 md:text-2xl  text-gray-700 space-y-2">
                {service.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>

        </div>

    )
}