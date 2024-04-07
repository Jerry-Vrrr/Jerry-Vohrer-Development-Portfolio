import NavBar from './Components/NavBar';
import './styles/App.css';
import AtfBanner from './Components/AtfBanner';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AtfBanner />
      <Projects />
    </div>
  );
}

export default App;
