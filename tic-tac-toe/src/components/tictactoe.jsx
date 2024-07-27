import useTicTacToe from "../hooks/Useticktack";
function TickTac() {
  // Restoring state values from child component
  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>
          {" "}
          Reset{" "}
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TickTac;
