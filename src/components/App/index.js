// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Recruitement from 'src/containers/Recruitement'; 

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/recruitement" exact component={Recruitement} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
