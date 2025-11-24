import algoimg from "./photo/Gemini_Generated_Image_70macb70macb70ma (1).png"
export default function Algo() {
  return (
    <section className="text-center px-6 py-12 w-full    ">
      <h2 className=" text-6xl lg:text-8xl font-playfair font-bold text-primary mb-12">Algo Trading</h2>
      <div className="flex flex-col lg:flex-row items-center md:items-start md:">
        <div className="  flex justify-center">
          <img
            className=" w-[70%] md:w-[70%] rounded-2xl"
            src={algoimg} />
        </div>
        <div className=" w-full pt-4 lg:pt-0 bg-red  text-black flex flex-col md:items-center lg:items-start md:pt-5 md:px-10 lg:text-justify lg:w-[40%] ">
          <p className=" w-full px-9 lg:max-w-3xl   text-xl text-justify  md:px-0 md:text-2xl pt-7  lg:text-justify mb-6 ">
            At Wiinnersgame Ventures, we harness the power of Algorithmic Trading
            to simplify decision-making and remove emotions from investing. Our
            strategies are designed to analyze data and execute trades with
            precision—faster than any human could.
          </p>

          <ul className=" px-9 md:px-0 text-justify text-xl lg:text-left   md:text-2xl  ">
            <li>Trade efficiently with minimal manual intervention</li>
            <li>Derive data-driven insights for consistent results</li>
            <li>Stay ahead in volatile market conditions</li>
          </ul>
        </div>
      </div>

    </section>

  )
}