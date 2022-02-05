import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer>coded by Anna Kwiatkowska</footer>
      </div>  
    </div>
  );
}
