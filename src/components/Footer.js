export default function Footer() {
  const exploreLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Important Links', url: '/links' },
    { name: 'Courses', url: '/courses' },
    { name: 'Careers', url: '/careers' },
  ];

  const resourcesLinks = [
    { name: 'Disclamer', url: '/disclamer' },
    { name: 'Testimonials', url: '/testimonials' },
    { name: 'Upcoming Events', url: '/events' },
    { name: 'Terms & Conditions', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Refund Policy', url: '/refund' },
  ];

  const contactInfo = {
    address: 'Wiinnergame, agra, Uttarpradesh',
    phone: '+91 72539-00555 ',
    email: ' Wiinnersgame@gmail.com',
  };
  return (
    <footer className=" text-white py-10 text-center flex flex-col bg-secondary  font-playfair text-4xl lg:text-9xl font-bold ">
      {/* <div className="flex flex-col items-center justify-center ">
        <h1 className="text-primary ">WIINNERSGAME</h1>
        <div className="w-[80%] h-1 bg-primary"></div>
      </div> */}





      <div className=" text-primary py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

          {/* === Column 3: Address === */}
          <div className="flex flex-col">
            <div>
              <div className="flex flex-col items-center justify-center ">
                <h1 className="text-primary text-4xl ">WIINNERSGAME</h1>
                <div className="w-[80%] h-1 mt-4 bg-primary"></div>
              </div>
            </div>


            <div className="mt-4">
              <h3 className="text-2xl text-center font-bold mb-4">Address</h3>

              {/* Address */}
              <div className="flex items-start text-xl mb-3">
                <span className="text-red-400 text-xl mr-3">📍</span>
                <p>{contactInfo.address}</p>
              </div>

              {/* Phone */}
              <div className="flex items-start text-xl mb-3">
                <span className="text-red-400 text-xl mr-3">📞</span>
                <p>{contactInfo.phone}</p>
              </div>

              {/* Email */}
              <div className="flex items-start text-xl mb-3">
                <span className="text-red-400 text-xl mr-3">📧</span>
                <p>{contactInfo.email}</p>
              </div>
            </div>


            {/* Social Icons Placeholder */}
            {/* <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-red-400">X</a>
        <a href="#" className="hover:text-red-400">f</a>
        <a href="#" className="hover:text-red-400">o</a>
        <a href="#" className="hover:text-red-400">▶️</a>
        <a href="#" className="hover:text-red-400">✈️</a>
      </div> */}
          </div>



          

          {/* === Column 2: Resources === */}
          <div className="">
            <h3 className="text-xl text-start font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-xl">
              {resourcesLinks.map((link) => (
                <li key={link.name} className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 mt-2 mr-3 rounded-sm"></span>
                  <a
                    href={link.url}
                    className="hover:text-red-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


{/* === Column 1: Explore === */}
          <div className="border-r-2 border-black">
            <h3 className="text-xl text-start font-semibold  mb-4">Explore</h3>
            <ul className="space-y-2 text-xl">
              {exploreLinks.map((link) => (
                <li key={link.name} className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 mt-2 mr-3 rounded-sm"></span>
                  <a
                    href={link.url}
                    className="hover:text-red-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>






        </div>
      </div>


    </footer>
  )
}