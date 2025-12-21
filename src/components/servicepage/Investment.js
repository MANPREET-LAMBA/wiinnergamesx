import Sheet from "../perform/Sheet";
import ServiceCards from "./ServiceCards";

export default function Investment() {
  const data = [
    {
      Price : "****",
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
              Heading={plan.Heading}
              features={plan.features}
            />
          ))}
        </div>
      </div>

      <Sheet />
    </div>
  );
}
