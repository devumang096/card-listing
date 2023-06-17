import React from 'react';
// import './Card.css';

const Card = ({ card }) => {
  const renderCardTypeIcon = (cardType) => {
    if (cardType === 'burner') {
      return <i className="fas fa-fire"></i>;
    } else if (cardType === 'subscription') {
      return <i className="fas fa-calendar-alt"></i>;
    }
    return null;
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-type">{renderCardTypeIcon(card.card_type)}</span>
        <span className="card-name">{card.name}</span>
      </div>
      <div className="card-body">
        <p>Budget: {card.budget_name}</p>
        <p>Owner ID: {card.owner_id}</p>
        {card.card_type === 'burner' && <p>Expiry: {card.expiry}</p>}
        {card.card_type === 'subscription' && <p>Limit: {card.limit}</p>}
        <p>Status: {card.status}</p>
      </div>
    </div>
  );
};

export default Card;
