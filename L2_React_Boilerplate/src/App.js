/* import "index.css" */

export const App = () => {
  const text = "Dies ist mein Text";
  
  const todoListe = [
    "Todo: Hausaufgabe machen",
    "Todo: WC putzen",
    "Todo: Curling Training!",
  ];

  const login = true;
  return (
    <div>
      <h1 id="ueberschrift"
      className="rotEl" style={{color:"black"}}
      >
        CTRL + SHIFT + i
        </h1>
      <p id="nummer1">Paragraf 1</p>
      <p>Paragraf 2</p>
      <h2 className="Heading">Ueberschrift</h2>
      <div id="MeinDiv">halloooooo</div>
      {text}
      <p/>
      {login ? <p>Ich bin eingeloggt</p> : <p>FEHLER!!!</p>}
      <a href="https://www.google.ch">Link zu Google</a>
      <ol>
        <li>Todo: Hausaufgabe machen</li>
        <li>Todo: WC putzen</li>
      </ol>
      <ol>
        {todoListe.map((todo) => (
          <li> {todo}</li>
        ))}
        <li>Todo: WC putzen</li>
      </ol>
      <span>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </span>
      <p/>
      <button className = "button"
       key={true} onClick={() => alert("Klick!")}>Klick mich!</button>
      <button className = "button"
       key={true}>Beenden</button>
      <hr />
      <img src=".\nando.png"
      alt="Nando bim Schaffe"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/400px-FHNW_Logo.svg.png"/>
    </div>
  )
};
