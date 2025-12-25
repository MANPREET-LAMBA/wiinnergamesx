import algoimg from "./photo/algo2.png"
export default function Algo() {
  return (
    <section className="text-center flex flex-col items-center px-6 py-12 w-full     ">
      <h2 className=" text-5xl  md:text-6xl lg:text-7xl xl:text-7xl font-playfair font-bold text-primary mb-12">Algo Trading</h2>
      <div className="flex border-2 w-fit bg-black flex-col rounded-xl lg:flex-row items-center md:items-start md:">
        <div className=" lg:w-3/5 flex justify-center items-center">
          <img
            className=" w-[70%] md:w-[80%] rounded-2xl"
            src={algoimg} />
        </div>
        <div className=" w-full lg:w-[100%] md: pt-4 lg:pt-0 pb-3 md:pb-0  text-white xl:my-auto flex flex-col md:items-center lg: md:pt-5 md:px-10 lg:text-justify  ">
          <p className=" w-full px-9  lg:max-w-3xl   text-lg text-justify  md:px-0 md:text-2xl pt-7  lg:text-justify mb-6 ">
            At Wiinnersgame Ventures, we harness the power of Algorithmic Trading
            to simplify decision-making and remove emotions from investing. Our
            strategies are designed to analyze data and execute trades with
            precision—faster than any human could.
          </p>

          <ul className=" w-full lg:max-w-3xl px-9 md:px-0 text-justify text-lg lg:text-left   md:text-2xl  ">
            <li>Trade efficiently with minimal manual intervention</li>
            <li>Derive data-driven insights for consistent results</li>
            <li>Stay ahead in volatile market conditions</li>
          </ul>
        </div>
      </div>

    </section>

  )
}