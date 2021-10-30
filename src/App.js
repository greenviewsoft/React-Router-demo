import NotFound from './componets/NotFound/NotFound';
import './App.css';
import About from './componets/About/About';
import Friends from './componets/Friends/Friends';
import Home from './componets/Home/Home';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './componets/Header';

function App() {
  return (
    <div className="App" >

      <Router>
      <Header></Header>

        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/friends" >
            <Friends></Friends>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
