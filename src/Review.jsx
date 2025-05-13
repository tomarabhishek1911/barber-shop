const testimonials = [
  {
    name: 'Mike Johnson',
    quote:
      "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
  },
  {
    name: 'David Martinez',
    quote:
      "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
  },
  {
    name: 'Chris Taylor',
    quote:
      "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
  },
];

const Review = () => {
  return (
    <section className="py-20 bg-[#111] text-white">
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-semibold mb-2">Testimonials</p>
        <h2 className="text-4xl font-extrabold inline-block relative">
          What Our Clients Say
          <span className="block h-1 bg-yellow-500 mt-2 w-full"></span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative group bg-[#181818] rounded-xl p-6 transition-all duration-300 overflow-hidden"
          >
            {/* Optional hover effect */}
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

            <p className="italic mb-6">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              {'★'.repeat(5)}{' '}
              <span className="text-white font-semibold ml-2">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;