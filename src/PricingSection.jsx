import React from "react";

const pricingPlans = [
  {
    title: "Classic Services",
    price: "$25",
    frequency: "/mo",
    features: [
      "Men's Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)",
    ],
    popular: true,
  },
  {
    title: "Premium Services",
    price: "$35",
    frequency: "/mo",
    features: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
    ],
  },
  {
    title: "Packages",
    price: "$50",
    frequency: "/mo",
    features: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-[#111] py-20 text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-yellow-500 text-lg font-semibold mb-2">
          Quality Barbering at Fair Prices
        </p>
        <h2 className="text-4xl font-bold mb-2 inline-block relative after:block after:w-24 after:h-1 after:bg-yellow-500 after:mx-auto after:rounded-full">
          Our Service Prices
        </h2>
        <p className="text-gray-400 mt-2 mb-12 text-lg max-w-2xl mx-auto">
          Choose from our range of professional barbering services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
  {pricingPlans.map((plan, index) => (
    <div
      key={index}
      className={`relative bg-[#1b1b1b] rounded-xl p-6 flex flex-col justify-between shadow-md transition hover:border-2 hover:border-yellow-500`}
    >
      {plan.popular && (
        <span className="absolute -top-4 right-4 bg-yellow-500 text-black text-sm px-4 py-1 rounded-full font-semibold shadow-md">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
        <div className="h-1 w-10 bg-yellow-500 mb-6 rounded-full"></div>

        <div className="flex items-baseline justify-start space-x-2 mb-6">
          <span className="text-3xl font-bold text-yellow-500">
            {plan.price}
          </span>
          <span className="text-sm text-gray-400">{plan.frequency}</span>
        </div>

        <ul className="space-y-3 text-left text-gray-300">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-yellow-500 mr-2 text-lg">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-8 w-full bg-black-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition">
        Book Now
      </button>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default PricingSection;
