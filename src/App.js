import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer>
          <a href="https://github.com/Fiorlore/react-homework-project">coded</a> 
          {""} by Anna Kwiatkowska
        </footer>
      </div>  
    </div>
  );
}
