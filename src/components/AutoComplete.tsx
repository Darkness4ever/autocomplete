
import React, { useState, useEffect } from 'react';
import '../styles/AutoComplete.css';
import SuggestionList from './SuggestionList';


// Defining the interface for the country which is coming from the REST API
interface Country {
  name: string; 
  alpha3Code: string; 
}

const AutoComplete: React.FC = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  //fetching the Countries List 
  const fetchSuggestions = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${query}`);
      const data = await response.json();
      if (response.ok) {
        // Mapping the response to fit our Country interface and update suggestions state
        const formattedCountries = data.map((country: any) => ({
          name: country.name,
          alpha3Code: country.alpha3Code
        }));
        setSuggestions(formattedCountries);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Failed to fetch countries:', error);
      setSuggestions([]);
    }
    setLoading(false);
  };

  //Implementing debouncing to fetch suggestions if the input is not just whitespace
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (input.trim()) {
        fetchSuggestions(input);
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timerId);
  }, [input]);

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a country..."
      />
      {loading ? <div>Loading...</div> : <SuggestionList suggestions={suggestions} searchTerm={input} />}
    </div>
  );
};


export default AutoComplete;
