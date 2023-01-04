import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1> Dictionary</h1>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Iana Zavoloka
        </footer>
      </div>
    </div>
  );
}

