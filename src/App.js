import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { AppFooter } from "./components/AppFooter/AppFooter";
import Contact from "./components/Contact/Contact";
import GithubCalendar from "./components/Github/GithubCalendar";
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
      <GithubCalendar />
      <Contact />
      <AppFooter />
    </div>
  );
}

export default App;
