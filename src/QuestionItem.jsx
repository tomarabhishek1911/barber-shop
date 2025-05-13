// src/components/QuestionItem.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Example icons

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#1b1b1b] rounded-lg shadow-md overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 md:p-6 text-left text-lg font-medium text-white hover:text-yellow-400 focus:outline-none transition-colors"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-yellow-400 transform transition-transform duration-300" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-gray-400 transform transition-transform duration-300" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '0px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px' },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden" // Important for height animation
          >
            <div className="p-4 md:p-6 pt-0 text-gray-300 leading-relaxed">
              {answer}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionItem;