import './css/App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <LogIn />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
