//import logo from './Resources/logo.svg';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Routing/Nav';

import Home from './Components/Routing/Home';
import About from './Components/Routing/About';
import EmployeeInfo from './Components/DataRequests/EmployeeInfo';
import FilmRequests from './Components/DataRequests/FilmRequests';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Users from './Components/Routing/Users';
import FilmInput from './Components/DataRequests/FilmInput';



function App() {
  return (
    <>
      <Header/>

      <Router>
      <Nav/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About}/>
          <Route path="/users/:id" component={Users}/>
          <Route path="/employee" component={EmployeeInfo}/>
          <Route path="/films" component={FilmInput}/>
        </Switch>
      </Router>

      <Footer/>
    </>
  );
}

export default App;
