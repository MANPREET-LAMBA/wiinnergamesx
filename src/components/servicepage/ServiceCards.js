import checkimg from "../photo/check.png"
import logo from "../service/Boots in Business course….jpeg"

export default function ServiceCards({ Heading, features, Price, imgx }) {
  return (
    <div className="bg-gradient-to-r from-pink-700 via-purple-700 to-sky-700 p-1 hover:scale-105  transition-all duration-500 ease-in-out rounded-xl">

      <div className="p-6 shadow-md border-2 rounded-xl bg-white h-full   ">
        <div className="w-full max-w-4xl mx-auto px-4">
          <img
            className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg shadow-md"
            src={imgx}
            alt="Blog header"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-playfair text-center font-bold text-primary mb-4">
          {Price}
        </h1>
        <h1 className="text-3xl xl:text-4xl font-playfair text-center font-bold text-primary mb-4">
          {Heading}
        </h1>

        <ul className=" text-lg md:text-xl mx-1 text-start text-gray-700 space-y-2">
          {features.map((feature, index) => (
            <div className="flex items-start gap-2 ">
              {/* <img className='w-5 h-5 mt-1' src={checkimg}/> */}
              <h3 className="ext-3xl md:text-4xl font-playfair text-center font-bold text-primary mb-4">*</h3>
              <li key={index}>{feature}</li>
            </div>

          ))}
        </ul>
      </div>
    </div>
  );
}
