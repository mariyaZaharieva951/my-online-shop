"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'English(US)', flag: '/flags/en.png' },
  { code: 'bg', name: 'Български(BG)', flag: '/flags/bg.png' },
];

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full lg:text-base text-sm text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Image src={selectedLanguage.flag} alt={selectedLanguage.name} width={20} height={15} />
          <span className="ml-2">{selectedLanguage.name}</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
      </div>

      {dropdownOpen && (
        <div className="absolute left-0 z-10 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                className="flex items-center w-full px-4 py-2 lg:text-base text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange(language)}
              >
                <Image src={language.flag} alt={language.name} width={20} height={15} />
                <span className="ml-2">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;