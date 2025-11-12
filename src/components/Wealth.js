import Card from "./Card";
import "../index.css"
import investing from "./photo/If you are worried about the current economic….png"
import trading from "./photo/Group 53.png"

export default function Wealth() {
  return (
    <div className="py-12   text-center">
      <div className="flex justify-center">
        <h2 className="text-8xl font-playfair  w-fit z-10  text-primary font-bold mb-6">
          Wealth Creation
        </h2>
        <h2 className="text-8xl font-playfair  w-fit  greenbgblur absolute font-bold mb-6">
          Wealth Creation
        </h2>
        <h2 className="text-8xl font-playfair  w-fit  greenbgblur absolute font-bold mb-6">
          Wealth Creation
        </h2>
        

      </div>
      <h2 className="text-3xl font-playfair font-bold mb-6 text-black">
        Wiinnergame winning strategy
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        <Card image={investing}/>
        <Card image={trading}/>

      </div>
    </div>
  )
}