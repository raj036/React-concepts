import React, { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "To Do",
    cards: [
      { id: 1, text: "Add card drag-and-drop" },
      { id: 2, text: "Implement state management" },
    ],
  },
  {
    id: 2,
    name: "In Progress",
    cards: [{ id: 3, text: "Design UI layout" }],
  },
  {
    id: 3,
    name: "Done",
    cards: [{ id: 4, text: "Setup project" }],
  },
];

function App() {
  const [boards, setBoards] = useState(initialData);

  // Handle dragging
  const handleDragStart = (e: any, cardId: number, boardId: number) => {
    e.dataTransfer.setData("cardId", cardId.toString());
    e.dataTransfer.setData("boardId", boardId.toString());
  };

  // Handle dropping card
  const handleDrop = (e: any, targetBoardId: number) => {
    const cardId = Number(e.dataTransfer.getData("cardId"));
    const sourceBoardId = Number(e.dataTransfer.getData("boardId"));

    if (sourceBoardId === targetBoardId) return;

    const sourceBoard = boards.find((board) => board.id === sourceBoardId);
    const targetBoard = boards.find((board) => board.id === targetBoardId);

    if (!sourceBoard || !targetBoard) return;

    const card = sourceBoard.cards.find((c) => c.id === cardId);
    if (!card) return;

    const updatedSourceBoard = {
      ...sourceBoard,
      cards: sourceBoard.cards.filter((c) => c.id !== cardId),
    };
    const updatedTargetBoard = {
      ...targetBoard,
      cards: [...targetBoard.cards, card],
    };

    const updatedBoards = boards.map((board) =>
      board.id === sourceBoardId
        ? updatedSourceBoard
        : board.id === targetBoardId
        ? updatedTargetBoard
        : board
    );
    setBoards(updatedBoards);
  };

  // Add a new card
  const addCard = (boardId: number) => {
    const cardText = prompt("Enter card text:");
    if (!cardText) return;

    const newCard = { id: Date.now(), text: cardText };
    const updatedBoards = boards.map((board) =>
      board.id === boardId
        ? { ...board, cards: [...board.cards, newCard] }
        : board
    );
    setBoards(updatedBoards);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {boards.map((board) => (
        <div
          key={board.id}
          onDrop={(e) => handleDrop(e, board.id)}
          onDragOver={(e) => e.preventDefault()}
          style={{
            width: "300px",
            padding: "10px",
            backgroundColor: "#f4f5f7",
            borderRadius: "5px",
          }}
        >
          <h3>{board.name}</h3>
          {board.cards.map((card) => (
            <div
              key={card.id}
              draggable
              onDragStart={(e) => handleDragStart(e, card.id, board.id)}
              style={{
                padding: "10px",
                margin: "5px 0",
                backgroundColor: "#ffffff",
                border: "1px solid #dcdcdc",
                borderRadius: "3px",
                cursor: "move",
              }}
            >
              {card.text}
            </div>
          ))}
          <button onClick={() => addCard(board.id)}>Add Card</button>
        </div>
      ))}
    </div>
  );
}

export default App;
