import NavBar from './Components/NavBar';
import './styles/App.css';
import AtfBanner from './Components/AtfBanner';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AtfBanner />
      <Projects />
      <Testimonials />
    </div>
  );
}

export default App;
