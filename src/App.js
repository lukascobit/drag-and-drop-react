import Board from './components/Board.js';
import Card from './components/Card.js'
import './App.css';

function App() {
  return (
    <div className="flexbox">
      <h1>drag and drop</h1>
      <Board id="board_one" className="board">
        <Card id="card_one" className="card">
          <p>Card One</p>
        </Card>
      </Board>

      <Board id="board_two" className="board">
        <Card id="card_two" className="card">
          <p>Card Two</p>
        </Card>
      </Board>
    </div>
  );
}

export default App;
