import React, { useState, useEffect, useMemo } from 'react';
import { faqData } from './faqData'; // Your FAQ data
import CategoryTabs from './CategoryTabs';
import QuestionItem from './QuestionItem';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0]?.category || 'All Questions');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const allQuestions = useMemo(() => {
    return faqData.reduce((acc, category) => {
      category.questions.forEach(q => acc.push({ ...q, category: category.category }));
      return acc;
    }, []);
  }, []);

  useEffect(() => {
    let currentQuestions = [];

    if (activeCategory === 'All Questions') {
      currentQuestions = allQuestions;
    } else {
      const categoryData = faqData.find(cat => cat.category === activeCategory);
      currentQuestions = categoryData
        ? categoryData.questions.map(q => ({ ...q, category: categoryData.category }))
        : [];
    }

    if (searchTerm) {
      currentQuestions = currentQuestions.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredQuestions(currentQuestions);
  }, [activeCategory, searchTerm, allQuestions]);

  const categories = ['All Questions', ...faqData.map(cat => cat.category)];

  return (
    <div className="bg-[#1b1b1b] text-white min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-semibold">Common Questions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg">Answers to common questions about our barbershop services.</p>
        </div>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full p-4 pl-12 bg-[#1b1b1b] border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="space-y-4 mt-8">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <QuestionItem key={index} question={item.question} answer={item.answer} />
            ))
          ) : (
            <p className="text-gray-400 text-center">No questions found matching your criteria.</p>
          )}
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors focus:outline-none"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default FAQSection;
