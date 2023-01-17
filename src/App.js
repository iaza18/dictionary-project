import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
         
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          This project was coded by Iana Zavoloka and is{" "}
          <a
            href="https://github.com/iaza18/dictionary-project" 
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            open-sourced on GitHub ©
          </a>
        </footer>
      </div>
    </div>
  );
}

