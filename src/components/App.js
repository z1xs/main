import React from 'react';
import './App.css';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import References from './References';
import ScollDown from './ScrollDown';


function App() {

  return (
    <div className="container">
      <header className="header">
        <div className="brnd"><h3>mgoralczyk.pl</h3></div>
        <About />
        <ScollDown />
      </header>

      <main>
        <Portfolio />
      </main>

      <footer>
        <div className="fc">
          <Contact />
          <References />
        </div>
      </footer>
    </div>
  );
}

export default App;
