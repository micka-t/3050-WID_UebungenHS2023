import "./App.css";
import "./index.css";
import "./Style.css";
import { Aufgabe1, Aufgabe2 } from "./static/ExText";

function App() {
  return (
    <div className="App">
      <div className="App-header ">React Lektion 2 - Übungen </div>
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          <button className="Aufgabe1_2" onClick={() => alert("Klick!")}>Klick mich</button>
          <button className="Aufgabe1_2" style={{
            color: "#fcba03",
            height: "30px",
            width: "100px",
            borderColor: "blue",
            borderStyle: "dashed",
            borderWidth: "1px",
            background: "red",
            fontFamily: "Arial",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer"}} onClick={() => alert("Klick!")}>Klick mich</button>
          <button id="nummer1" onClick={() => alert("Klick!")}>Klick mich</button>          
        </div>

      </div>
      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <div id="Elternelement"
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"}} >
            <div className="Kinderelement" style={{
            background: "red"}}> Kind1
            </div>
            <div className="Kinderelement" style={{
            background: "blue"}}> Kind2
            </div>
            <div className="Kinderelement" style={{
            background: "green"}}> Kind3
            </div>
            <span className="Kinderelement" style={{
            background: "green"}}> span
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
