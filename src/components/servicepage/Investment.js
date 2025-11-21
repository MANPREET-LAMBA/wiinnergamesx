import Sheet from "../perform/Sheet";
import ServiceCards from "./ServiceCards";

export default function Investment() {
  const data = [
    {
      Heading: "BASIC",
      features: [
        "Fundamental Calls for Long Term Wealth Creation",
        "Sectoral Allocation",
        "Capital Allocation",
        "IPO Advisory",
        "SME & Unlisted Advisory (Limited)",
        "Selective Swing Trade",
        "Entry and Exit",
        "Portfolio Alignment",
        "3 Years Advisory on Stock Recommendation"
      ]
    },
    {
    Heading: "PLAN B",
    features: [
      "Multibagger Calls",
      "High Risk Penny Stocks",
      "Junk Stocks Ready for Turn Around",
      "SME / Unlisted / IPO",
      "Everything from Basic Plan"
    ]
  },
    {
    Heading: "SPECIAL 6",
    features: [
      "6 Calls",
      "Strong Fundamental or Technofunda Calls",
      "Entry and Exit Will Be Shared",
      "Portfolio Advisory"
    ]
  },
  {
    Heading: "BUDGET",
    features: [
      "4 Stocks to Be Shared",
      "Low Price Stocks with Strong Fundamental",
      "Entry and Exit Will Be There",
      "Portfolio Advisory"
    ]
  },
  
  ];

  return (
    <div className="text-center ">
      <h1 className=" text-4xl md:text-7xl font-playfair text-primary font-bold text-center pt-5">
        INVESTMENT PLAN
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

     
      <Sheet/>
     

      
    </div>
  );
}
