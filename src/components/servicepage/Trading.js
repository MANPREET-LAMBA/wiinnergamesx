import Tradingsheet from "../perform/Tradingsheet";
import ServiceCards from "./ServiceCards";

export default function Trading() {
  const data = [
    {
      Heading: "BASIC",
      imgx : "/trading1.jpeg",
      features: [
        "20 plus calls in a quarter",
        "Entry price",
        "Two to three target",
        "Exit and stop loss",
        "Customized advisory for fresher",
        "Live market assistance",
      ]
    },
    {
      Heading: "KING PREMIUM",
           imgx : "/trading2.jpeg",
      features: [
        "Calls mostly from derivative space",
        "25 plus calls in quarter",
        "Entry exit price",
        "Two to three target",
        "Customized advisory for fresheR",
        "Live market assistance "
      ]
    }
  ];

  return (
    <div className="text-center  h-fit mt-24">
      <h1 className="text-4xl md:text-7xl font-playfair text-primary font-bold text-center pt-5">
        TRDAING PLAN
      </h1>

      <div className="flex flex-col md:flex-row md:flex-1 text-start  justify-evenly md:flex-wrap gap-10 p-10">
        {data.map((plan, index) => (
          <ServiceCards
            key={index}
            imgx = {plan.imgx}
            Heading={plan.Heading}
            features={plan.features}
          />
        ))}
      </div>
      <h1 className=" text-4xl p md:text-7xl font-playfair text-primary font-bold text-center pt-8">
        Performance Sheet
      </h1>

      <Tradingsheet />

    </div>
  );
}
