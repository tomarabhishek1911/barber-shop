const services = [
  {
    icon: 'User',
    title: 'Expert Barbers',
    description: "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
  },
  {
    icon: 'Scissors',
    title: 'Premium Tools & Products',
    description: "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
  },
  {
    icon: 'Home',
    title: 'Classic Barbershop Experience',
    description: "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
  },
];

const Quality = () => {
  return (
    <section className="py-20 bg-[#111] text-white">
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-semibold mb-2">Our Commitment</p>
        <h2 className="text-4xl font-extrabold inline-block relative">
          Why Choose PMC Barbershop?
          <span className="block h-1 bg-yellow-500 mt-2 w-full"></span>
        </h2>
        <p className="text-gray-400 mt-4">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group bg-[#181818] rounded-xl p-6 transition-all duration-300 overflow-hidden"
          >
            {/* Vertical Left Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
            {/* Top Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

            <div className="mb-6">
              <div className="bg-[#2a261a] text-yellow-500 font-medium px-4 py-2 rounded w-fit">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quality;