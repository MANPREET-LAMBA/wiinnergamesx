import Partnercard from "./Partnercard";

export default function Partner(){
    return(
        <div>
            <section className="text-center py-8 border-t">
        <h3 className=" text-4xl lg:block md:hidden  md:text-6xl lg:text-8xl font-playfair font-semibold text-primary mb-4">
          Our Partners,Our Strength
        </h3>
        <h3 className=" sm:hidden md:block lg:hidden text-4xl md:text-6xl lg:text-8xl font-playfair font-semibold text-primary mb-4">
          Our Partners,<br/>Our Strength
        </h3>
     <div className="flex flex-col items-center md:flex-row  md:justify-center gap-10 pt-10">
        <Partnercard/>
       <Partnercard/>
     </div>
      </section>
        </div>
    )
}