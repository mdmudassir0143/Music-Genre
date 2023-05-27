import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App text-white overflow-hidden">
        <Header/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default App;
