import "./App.css";
import logo from "./logo-shecodes.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Paradise" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Alina-Marija Lapčiuk and is {""}
            <a
              href="https://github.com/Mariooona/react-dictionary-project"
              target="_blank"
              title="GitHub-link"
              rel="noreferrer"
            >
              open-sourced {""}
            </a>
            on GitHub
          </small>
        </footer>
      </div>
    </div>
  );
}
