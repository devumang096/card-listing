import React, { useState } from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredCards = cards.filter((card) => {
    const nameMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = filterType === '' || card.card_type === filterType;
    return nameMatch && typeMatch;
  });

  return (
    <div className="card-list">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by card name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterType} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="burner">Burner</option>
          <option value="subscription">Subscription</option>
        </select>
      </div>
      {filteredCards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
};

export default CardList;
