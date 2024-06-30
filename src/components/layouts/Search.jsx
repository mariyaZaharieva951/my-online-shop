import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const categories = ['All Categories', 'Category 1', 'Category 2', 'Category 3'];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategoryChange = (direction) => {
    if (direction === 'up') {
      setSelectedCategoryIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
    } else {
      setSelectedCategoryIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleSearch = () => {
    const selectedCategory = categories[selectedCategoryIndex];
    console.log(`Searching for "${searchTerm}" in "${selectedCategory}"`);
   
  };

  return (
    <div className="flex w-[453px] h-[44px] bg-gray-light items-center justify-between py-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-2 py-1 bg-gray-light text-gray text-sm rounded-md focus:outline-none input-no-border"
        placeholder="Search someting..."
      />
      <div className="relative">
        <button className="flex items-center px-2 py-1 text-nowrap bg-gray-light rounded-md -mr-[4 0px]">
          <span className='text-sm'>{categories[selectedCategoryIndex]}</span>
          <div className="ml-2 flex flex-col">
            <FontAwesomeIcon icon={faChevronUp} className='w-2'  onClick={() => handleCategoryChange('up')} />
            <FontAwesomeIcon icon={faChevronDown} className='w-2' onClick={() => handleCategoryChange('down')} />
          </div>
        </button>
      </div>
      <button
        onClick={handleSearch}
        className="px-2 py-2 bg-black text-white rounded-md flex items-center"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Search;