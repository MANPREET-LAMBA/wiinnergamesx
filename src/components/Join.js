import Cardservice from "./Cardsservice"


export default function Join() {
  const data = [
    {
      Heading: "INVESTMENT",
      features: [
        "Long Term",
        "Wealth Creation",
        "Multibaggers",
        "Positional Investing",

      ]
    },
    {
      Heading: "TRADING",
      features: [
        "Short Term",
        "Swing Trading",
        "Intraday",
        "BTST"
       
      ]
    },
     {
      Heading: "Future & Option",
      features: [
        "Futures",
        "Options",
        "Postional Strategies"
       
      ]
    },
    {
      Heading: "Algo Trading",
      features: [
        "Automated Signal- Index",
        "Automated Signal- Forex",
        "Automated Signal- Commodities",
       "Automated Signal- Crypto",
       
      ]
    },
     {
      Heading: "Learning",
      features: [
        "Fundamentals",
        "Prop Levels",
        "RA Certification",
        "Practise Session"
       
      ]
    },
    {
      Heading: "PMS",
      features: [
        "Portfolio Management",
        "Profit Sharing ",
  
       
      ]
    }
  ];
  return (
    <div className=" relative px-8">

      <section className=" bg-opacity-85 h-fit   text-white py-3 md:py-10 px-6 text-center rounded-lg m-6">

        <div className="flex justify-center z-40 relative">
          <h2 className="text-5xl lg:text-8xl w-fit font-playfair text-primary font-extrabold mb-4  z-10">Our Services</h2>

        </div>
        <div className="flex flex-col z-40  w-full  justify-center lg:flex-row  lg:justify-evenly lg:flex-wrap h-full pt-12 gap-10">

          {data.map((data, index) => (

            <Cardservice key={index} title={data.Heading} service={data.features} />
          ))}

        </div>
      </section>
    </div>

  )
} 