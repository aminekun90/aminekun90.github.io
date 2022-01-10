import "./App.scss";
import profile from "./img/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>AMINE BOUZAHAR</h1>
        <div>
          <code>Coming soon ...</code>
        </div>
        <div className="contact">
          <ul>
            <li>
              <a
                href="mailto:mohamed.amine.bouzahar@gmail.com"
                aria-label="Send a mail to mohamed.amine.bouzahar@gmail.com"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </a>
            </li>

            <li>
              <a
                className="App-link"
                href="https://www.linkedin.com/in/amine-bouzahar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open linkedIn link"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
