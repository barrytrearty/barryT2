import "./App.css";
import AboutMe from "./pages/aboutme/AboutMe";
import Contactme from "./pages/contactme/Contactme";
import Projects from "./pages/projects/Projects";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Welcome />
        <AboutMe />
        <Projects />
        <Contactme />
      </div>
    </div>
  );
}

export default App;
