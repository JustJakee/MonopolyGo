import './css/App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import LogIn from './components/LogIn';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <LogIn />
      <Header progress={progress} />
      <Menu setProgress={setProgress} />
      <Footer />
    </div>
  );
}

export default App;
