// src/components/SuggestionList.tsx
import React from 'react';
import '../styles/SuggestionList.css'

interface SuggestionListProps {
  suggestions: Country[];
  searchTerm: string;
}

interface Country {
  name: string;
  alpha3Code: string;
}

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions, searchTerm }) => {
  
  // Function to highlight the search term within the suggestion text  
  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? <b key={index}>{part}</b> : part
    );
  };

  return (
    <ul className="suggestions">
      {suggestions.map(suggestion => (
        <li key={suggestion.alpha3Code}>
          {highlightText(suggestion.name, searchTerm)}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
