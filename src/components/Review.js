export default function Review() {
    return (
        <section className="py-12 px-6 text-center">
            <div className="flex justify-center">
                <h2 className=" font-bold font-playfair text-primary  text-5xl md:text-6xl lg:text-8xl mb-6">
                   Testimonials
                </h2>
               
            </div>
            <div className="flex justify-center flex-wrap gap-6">
                {[
                    {
                        name: "Rohit M.",
                        text: "Superb tools and great support. Helped me trade smarter and gain confidence.",
                    },
                    {
                        name: "Sneha K.",
                        text: "The strategies are simple yet powerful! Loved the personalized approach.",
                    },
                    {
                        name: "Arjun M.",
                        text: "Algo trading insights changed my portfolio completely. Very helpful!",
                    },
                    {
                        name: "Priya S.",
                        text: "Amazing education resources. I finally understand how to manage risks properly.",
                    },
                ].map(({ name, text }) => (
                     <div className="bg-gradient-to-r  from-pink-700 via-purple-700 lg:w-2/12  to-sky-700 p-1 hover:scale-105 transition-all duration-500 ease-in-out rounded-xl">

                    <div
                        key={name}
                        className="bg-white  rounded-lg shadow-md p-4 w-full h-full flex flex-col justify-between"
                    >
                        <p className=" text-xl md:text-2xl mb-2  text-primary">"{text}"</p>
                        <p className="font-semibold text-primary text-2xl md:text-4xl font-playfair pt-5">– {name}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )
}