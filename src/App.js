import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import './App.css';

const jsonData = {
  data: [
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 100,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 1000,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '9 Feb',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Quickbooks',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: {
        value: 50,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 250,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 10,
      status: 'active',
    },
  ],
  page: 1,
  per_page: 10,
  total: 100,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Your');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const filteredData = jsonData.data.filter((card) => {
      if (activeTab === 'Your') {
        return card.owner_id === 1;
      } else if (activeTab === 'All') {
        return true;
      } else if (activeTab === 'Blocked') {
        return card.status === 'blocked';
      }
    });

    setFilteredCards(filteredData);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'Your' ? 'active' : ''}`}
          onClick={() => handleTabClick('Your')}
        >
          Your Cards
        </div>
        <div
          className={`tab ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => handleTabClick('All')}
        >
          All Cards
        </div>
        <div
          className={`tab ${activeTab === 'Blocked' ? 'active' : ''}`}
          onClick={() => handleTabClick('Blocked')}
        >
          Blocked Cards
        </div>
      </div>

      <CardList cards={filteredCards} />
    </div>
  );
};

export default App;
