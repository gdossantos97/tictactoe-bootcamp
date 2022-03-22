const Sqaure = ({id , player}) => {
  const [color,setColor] = React.useState('green');
  const palet = ['red', 'blue','green'];
  const getRandomColor = () => 
    palet[Math.floor(Math.random()*3)]
  
  // keep track of state of the Square 
  return (
    // change color of Square on click 
    <button onClick={(e) => {
     alert(`I am square ${id}`)
    }}> 
      <h1>{player}</h1>
    </button>
  )
}




const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return<Sqaure id={i} player = {player}></Sqaure>;
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
