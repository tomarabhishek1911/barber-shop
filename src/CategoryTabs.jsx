const CategoryTabs = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ease-in-out
                        ${activeCategory === category
                            ? 'bg-yellow-400 bg-[#1b1b1b] shadow-md'
                            : 'bg-[#1b1b1b] text-gray-300 hover:bg-yellow-400 hover:text-white'
                        }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;