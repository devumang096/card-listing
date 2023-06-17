import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import './App.css';


const jsonData = {
  "data": [
    {
      "name": "Mixmax",
      "budget_name": "Software subscription",
      "owner_id": 1,
      "spent": {
        "value": 100,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 1000,
        "currency": "SGD"
      },
      "card_type": "burner",
      "expiry": "9 Feb",
      "limit": 100,
      "status": "active"
    },
    {
      "name": "Quickbooks",
      "budget_name": "Software subscription",
      "owner_id": 2,
      "spent": {
        "value": 50,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 250,
        "currency": "SGD"
      },
      "card_type": "subscription",
      "limit": 10,
      "status": "active"
    },
    {
      "name": "Card 3",
      "budget_name": "Budget 3",
      "owner_id": 1,
      "spent": {
        "value": 200,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 800,
        "currency": "SGD"
      },
      "card_type": "burner",
      "expiry": "15 Mar",
      "limit": 150,
      "status": "active"
    },
    {
      "name": "Card 4",
      "budget_name": "Budget 4",
      "owner_id": 2,
      "spent": {
        "value": 75,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 225,
        "currency": "SGD"
      },
      "card_type": "subscription",
      "limit": 20,
      "status": "blocked"
    },
    {
      "name": "Card 5",
      "budget_name": "Budget 5",
      "owner_id": 1,
      "spent": {
        "value": 300,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 700,
        "currency": "SGD"
      },
      "card_type": "burner",
      "expiry": "25 Apr",
      "limit": 200,
      "status": "active"
    },
    {
      "name": "Card 6",
      "budget_name": "Budget 6",
      "owner_id": 2,
      "spent": {
        "value": 120,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 130,
        "currency": "SGD"
      },
      "card_type": "subscription",
      "limit": 5,
      "status": "active"
    },
    {
      "name": "Card 7",
      "budget_name": "Budget 7",
      "owner_id": 1,
      "spent": {
        "value": 50,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 450,
        "currency": "SGD"
      },
      "card_type": "burner",
      "expiry": "10 May",
      "limit": 300,
      "status": "blocked"
    },
    {
      "name": "Card 8",
      "budget_name": "Budget 8",
      "owner_id": 2,
      "spent": {
        "value": 80,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 170,
        "currency": "SGD"
      },
      "card_type": "subscription",
      "limit": 15,
      "status": "active"
    }
  ],
  "page": 1,
  "per_page": 10,
  "total": 100
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
