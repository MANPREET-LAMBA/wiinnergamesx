import ServiceCards from "./ServiceCards";
import imgss from "../photo/Gemini_Generated_Image_1uipk61uipk61uip.png"

export default function Education() {
  const data = [
    {
      Heading: "BASIC",
      features: [
        "Encounter the galaxy of stock markets from its roots ",
        "Financial market",
        "Global market",
        "Fundamental of stocks",
        "Dow Theory",
        "Candelsticks",
        "Practise sessions",
        "Mentorship (unlimited)"
      ]
    },
    {
    Heading: "PRO LEARNER  ",
    features: [
      "In depth studies even if already gone through with number of courses",
      "In depth fundaments practice",
      "Technical indicators",
      "Derivatives (basic)",
      "Intensive practice sessions",
      "Paid group calls access ",
      "Mentorship (life long)"
    ]
  },
   {
    Heading: "OPTIONS",
    features: [
      "Option trading is one of best lucrative trading",
      "Option geeks",
      "Vix , PCR, open interest",
      "Trading with Option",
      "Monthly Income from options",
      "Unlimited trading strategies with options.",
      
    ]
  }
  ];

  return (
    <div className="text-center  mt-24   ">
       <div className="w-full px-10 pt-10 h[70vh]">
        <img className=" rounded-xl" src={imgss}/>

      </div>
      <h1 className="text-4xl md:text-7xl font-playfair text-primary font-bold text-center pt-5">
        EDUCATION PLAN
      </h1>

     

      <div className="flex text-start justify-evenly flex-wrap gap-10 p-10">
        {data.map((plan, index) => (
          <ServiceCards
            key={index}
            Heading={plan.Heading}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}
