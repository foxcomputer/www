import './App.css';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import DevLog from './components/DevLog';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <DevLog />
      <About />

      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© 2025 fox.computer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
