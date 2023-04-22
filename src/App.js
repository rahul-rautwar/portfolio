import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
