import "../index.css"

export default function Learning() {
    return (
        <section className="bg-secondary border-opacity-70 text-primary py-12 px-6 text-start flex rounded-lg m-6">
           
            <div className="px-[5%]">
                <h2 className="text-8xl font-playfair font-bold text-center mb-4">Learning</h2>
            <p className="w-auto pt-6 text-justify text-2xl mb-6">
                Welcome to our Learning Hub – your gateway to mastering the stock market with clarity and confidence. Whether you’re a beginner or a seasoned investor, we bring you proven strategies, winning techniques, and expert insights to help you grow smarter in every market condition.
           
                Our mission is to empower you with tested knowledge and practical methods so you can make informed decisions, manage risks effectively, and build wealth with confidence.
            </p>
            <h2 className="text-2xl">What you’ll find here:</h2>

            <ul className="text-2xl">
                <li>
                    <strong>Beginner Guides</strong> – <span>Learn the fundamentals of investing and the stock market in simple steps.</span>
                </li>
                <li>
                    <strong>Proven Strategies</strong> – <span>Access tried-and-tested methods that successful investors use to grow portfolios.</span>
                </li>
                <li>
                    <strong>Winning Insights</strong> – <span>Explore powerful trading techniques backed by real market experience.</span>
                </li>
                <li>
                    <strong>Portfolio Mastery</strong> – <span>Learn risk management, diversification, and smart asset allocation.</span>
                </li>
                <li>
                    <strong>Expert Tips</strong> – <span>Guidance from professionals who follow the pulse of the market.</span>
                </li>
            </ul>
            <p className="text-2xl">With the right knowledge and winning strategies, you’re not just investing—you’re building the foundation for long-term success.</p>
            </div>
        </section>
    )
}