import Sheet from "../perform/Sheet";
import ServiceCards from "./ServiceCards";
import logo from "../service/Boots in Business course….jpeg"


export default function Investment() {
  const data = [
    {
      Price : "****",
      imgx : "/Boots in Business course….jpeg",
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
      Price : "****",
      imgx : "/How Is Inflation Affecting the US Real Estate Market_.jpeg",
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
       Price : "****",
       imgx : "/Search Marketing Results in Higher ROI and Leads….jpeg",
      Heading: "SPECIAL 6",
      features: [
        "6 Calls",
        "Strong Fundamental or Technofunda Calls",
        "Entry and Exit Will Be Shared",
        "Portfolio Advisory"
      ]
    },
    {
       Price : "****",
      imgx : "/tradingcrypto.jpeg",
      Heading: "BUDGET",
      features: [
        "4 Stocks to Be Shared",
        "Low Price Stocks with Strong Fundamental",
        "Entry and Exit Will Be There",
        "Portfolio Advisory"
      ]
    }
  ];

  return (
    <div className="text-center mt-24 w-full">
      <h1 className="text-4xl md:text-7xl font-playfair text-primary font-bold pt-5">
        INVESTMENT PLAN
      </h1>

      {/* 🟣 Pricing Table Layout (TradingView style) */}
      <div className="w-full mt-10 px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4  gap-8">
          {data.map((plan, index) => (
            <ServiceCards
              key={index}
              Price= {plan.Price}
              imgx = {plan.imgx}
              Heading={plan.Heading}
              features={plan.features}
            />
          ))}
        </div>
      </div>
       <h1 className=" text-4xl p md:text-7xl font-playfair text-primary font-bold text-center pt-8">
        Performance Sheet
      </h1>

      <Sheet />
    </div>
  );
}
