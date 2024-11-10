import React, { useReducer, useState } from 'react';

// Initial state 
const initialState = [];

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, { id: action.payload.id, name: action.payload.name, quantity: 1 }];
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default function TaskTwo() {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    const [newItemName, setNewItemName] = useState('');

    const addItem = () => {
        if (newItemName.trim() !== '') {
            const newItem = { id: Date.now(), name: newItemName };
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setNewItemName('');
        }
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={addItem}>Add Item</button>

            {/* Items list */}
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                        <button
                            onClick={() =>
                                dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })
                            }
                        >
                            +
                        </button>
                        <button
                            onClick={() =>
                                dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })
                            }
                            disabled={item.quantity === 1}
                        >
                            -
                        </button>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
