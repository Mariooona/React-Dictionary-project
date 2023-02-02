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
            Coded by <span className="name"> Alina-Marija Lapčiuk </span> and is{" "}
            {""}
            <a
              href="https://github.com/Mariooona/react-dictionary-project"
              target="_blank"
              title="GitHub-link"
              rel="noreferrer"
            >
              open-sourced
            </a>
            {""} and hosted {""}
            <a
              href="https://main--dynamic-valkyrie-9503b5.netlify.app/"
              target="_blank"
              title="Netlify-link"
              rel="noreferrer"
            >
              {""}
              on Netlify
              {""}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
