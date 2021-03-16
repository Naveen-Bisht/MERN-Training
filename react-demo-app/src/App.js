import logo from './logo.svg';
import './App.css';
import {Head} from './container/head';
import {Body} from './container/body';
import {Foot} from './container/foot';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Head />
      <Body />
      <Foot /><br /><br /><hr />
      <h1>This is example of Router</h1>
      <Router>
      <ul className="App-header"> 
              <li> 
                <Link to="/container/head">Header</Link> 
              </li> 
              <li> 
                <Link to="/container/body">Body</Link> 
              </li> 
              <li> 
                <Link to="/container/foot">Footer</Link> 
              </li> 
      </ul> 
      <Switch> 
              <Route exact path='/container/head' component={Head}></Route> 
              <Route exact path='/container/body' component={Body}></Route> 
              <Route exact path='/container/foot' component={Foot}></Route> 
            </Switch> 
      </Router>
    </div>
  );
}

export default App;
