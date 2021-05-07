import NavgationBar from './Components/NavigationBar.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import Gallery from './Components/Gallery.js'
import Vision from './Components/Vision.js'
import Trustees from './Components/Trustees.js'
import Contact from './Components/Contact.js'


import {BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavgationBar />
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/vision' component={Vision} />
          <Route path='/trustees' component={Trustees} />
          <Route path='/contact' component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
