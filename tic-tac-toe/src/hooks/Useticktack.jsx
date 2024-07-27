import { useState } from "react";
// Initialize the array to store number of board values
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  // Use state value to store values
  const [board, setBoard] = useState(initialBoard());

  const [isXNext, setIsXNext] = useState(true);
  // Declare winning patterns according to num of cells
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Calculate winner based on looping of patterns
  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player${winner} wins!`;
    if (!board.includes(null)) return `It is draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  // Reset state value and set default player
  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };
  // Return state values and setfunctions to parent
  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
