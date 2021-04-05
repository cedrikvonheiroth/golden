import React from 'react';

import Navbar from './components/Navbar';
import Hem from './pages/Hem';
import Träning from './pages/Träning';
import Priser from './pages/Priser';
import Schema from './pages/Schema';
import OmOss from './pages/OmOss';
import Kontakt from './pages/Kontakt';
import Footer from './components/Footer';

import { BrowserRouter, Route, Switch} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route path="/" component={Hem} exact/>
          <Route path="/träning" component={Träning} />
          <Route path="/Priser" component={Priser} />
          <Route path="/Schema" component={Schema} />
          <Route path="/OmOss" component={OmOss} />
          <Route path="/kontakt" component={Kontakt} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
