export default function ServiceCards({ Heading, features }) {
  return (
    <div className="p-6 shadow-md border-2 border-primary rounded-xl md:w-2/5 bg-secondary">
      {/* Heading */}
      <h1 className=" text-3xl md:text-5xl font-playfair text-center font-bold text-primary mb-4">{Heading}</h1>

      {/* Features List */}
      <ul className="list-disc text-xl  md:text-xl mx-3 list-outside text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
