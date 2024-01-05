// TransactionItem.js

import React, { useState } from 'react';

const TransactionItem = ({ index, amount, onDelete, onEdit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAmount, setEditedAmount] = useState(amount);

  const handleEditClick = () => {
    setIsEditing(true);
    setIsHovered(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedAmount(amount);
  };

  const handleUpdateClick = () => {
    setIsEditing(false);
    onEdit(index, parseFloat(editedAmount));
  };

  return (
    <li
      className={`list ${isEditing ? 'editing' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
           
          />
        </>
      ) : (
        <span>{index + 1}. Transaction: ${typeof amount === 'number' ? amount.toFixed(2) : 0.00}</span>
      )}
      {isHovered && (
        <>
          {isEditing ? (
            <>
              <button onClick={handleUpdateClick} className="update-btn">
                Update
              </button>
              <button onClick={handleCancelClick} className="cancel-btn">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEditClick} className="edit-btn">
              Edit
            </button>
          )}
          <button onClick={() => onDelete(index)} className="delete-btn">
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TransactionItem;



