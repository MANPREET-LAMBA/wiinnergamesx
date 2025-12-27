import { Shield, Lightbulb, TrendingUp } from "lucide-react";

export default function Aboutus() {
  const cards = [
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Unwavering Integrity",
      text: "We uphold the highest standards of integrity in all our services. Our commitment to honesty and ethical practices ensures that you can trust us to provide reliable and accurate investment advice.",
      color: "bg-purple-700",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Absolute Transparency",
      text: "Transparency is at the core of our operations. We believe in clear and open communication, keeping you informed about every recommendation and decision. Our transparent processes build trust and confidence in our Research Services.",
      color: "bg-sky-700",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Strategic Discipline",
      text: "Successful investing requires discipline. We help you develop a disciplined investment strategy, focusing on long-term goals and minimizing impulsive decisions. Our disciplined approach maximizes your chances of achieving consistent returns.",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="w-full   py-16  md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center md:text-center flex flex-col items-center mb-10 ">
        <h2 className="text-5xl sm:text-5xl text-center md:text-6xl lg:text-7xl xl:text-7xl font-playfair font-bold leading-tight">
          <span className="text-purple-600">Why </span>
          <span className="text-primary">Join Us?</span>
        </h2>
        <p className="pt-8 text-base text-center  sm:text-lg lg:text-2xl text-gray-700 w-11/12 mx-auto md:mx-0">
At WIINNERSGAME, we re-define winning strategies whether it is investment, trading or learning 
We are focused over deep research, discipline and maintain integrity to deliver highest winning rate.         </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:items-center  lg:flex-row justify-center md:justify-between items-center  gap-8  md:w-[90%] mx-11 lg:mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} lg:h-72 text-white p-8 rounded-2xl shadow-md relative hover:scale-105 transition-transform duration-300 w-full sm:w-[90%] lg:w-1/3`}
          >
            <div className="absolute -top-6 left-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 shadow-lg">
              {card.icon}
            </div>
            <h3 className="mt-8 text-xl sm:text-2xl font-semibold">{card.title}</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-100 leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
