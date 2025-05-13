import { Description } from "@headlessui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import barber1 from './images/barber1.jpg';
import barber2 from './images/barber2.jpg';
import barber3 from './images/barber3.jpg';
const barbers = [
  {
    name: "Jason Rodriguez",
    title: "Owner & Master Barber",
    image: barber1,
    Description: "With over 15 years of experience, Jason brings precision, creativity, and a passion for grooming. He's the go-to expert for classic cuts, fades, and beard styling. His reputation is built on trust and consistent excellence.",
    social: {
      fb: "#",
      ig: "#",
      tw: "#",
    },
  },
  {
    name: "Marcus Williams",
    title: "Senior Barber",
    image: barber2,
    Description: "Known for his detailed craftsmanship and modern styling techniques, Marcus has been in the industry for 10 years. He specializes in trendy looks, kid-friendly cuts, and sharp lines that define personal style.",
    social: {
      fb: "#",
      ig: "#",
      tw: "#",
    },
  },
  {
    name: "Terrence Jackson",
    title: "Barber & Stylist",
    image: barber3,
    Description: "Terrence merges style and skill with his 8+ years of experience. From casual trims to intricate hair designs, he ensures every client leaves with confidence and a fresh, clean look.",
    social: {
      fb: "#",
      ig: "#",
      tw: "#",
    },
  },
];

export default function BarbersSection() {
  return (
    <section className="bg-[#111] py-16 px-4 text-white text-center">
      <h4 className="text-yellow-500 text-sm font-semibold">Expert Stylists</h4>
      <h2 className="text-4xl font-bold mt-2">
        Meet <span className="text-white">Our Barbers</span>
        <div className="h-1 bg-yellow-500 w-16 mx-auto mt-2 transition-all duration-300"></div>
      </h2>
      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {barbers.map((barber, idx) => (
          <div key={idx} className="bg-[#1b1b1b] p-4 rounded-xl text-center border-2 border-transparent hover:border-yellow-500 transition-all">
            <img src={barber.image} alt={barber.name} className="rounded-lg w-full h-72 object-cover" />
            <div className="border-t-2 border-yellow-500 w-10 mx-auto my-4 transition-all duration-300"></div>
            <h3 className="text-xl font-bold text-white">{barber.name}</h3>
            <p className="text-yellow-500">{barber.title}</p>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">{barber.Description}</p>
            <div className="flex justify-center mt-4 gap-4 text-yellow-500">
              <a href={barber.social.fb} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href={barber.social.ig} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href={barber.social.tw} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
