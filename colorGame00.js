const Sqaure = ({id , newState}) => {
  const [color,setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const xo = ["O", "X"];

  const palet = ['red', 'blue','green'];
  const getRandomColor = () => 
    palet[Math.floor(Math.random()*3)]

    React.useEffect(() => {
      console.log(`Render ${id}`);
      return () => console.log(`unmounting Square ${id}`);
    });

  
  // keep track of state of the Square 
  return (
    // change color of Square on click 
    <button onClick= { e => {
     let col = getRandomColor();
     setColor(col);
     let nextPlayer = newState({ id: id, color:col });
     e.target.style.background = col;
     setStatus(nextPlayer);
    }}> 
      <h1>{xo[status]}</h1>
    </button>
  )
}




const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [state, setState] = React.useState([]);

// set state here
  let status = `Player ${player}`;


  // define newState function 

const newState = (ob) => {
  let nextplayer = (player + 1)  % 2;
  setPlayer(nextplayer);
  setState([...state, ob]);
  console.log(`adding state ${JSON.stringify(state)}`);
  status = `Player ${nextplayer}`;
  return nextplayer;
}


  function renderSquare(i) {
    return<Sqaure id={i} player = {player} newState={newState}></Sqaure>;
  }
  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1) % 2 );
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
      <div id="info">
        <h1>{status}</h1>
      </div>    
      
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
