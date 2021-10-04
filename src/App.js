import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { header } from './components/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <main className="cv-content">

          <Switch>

            <Route path="/" exact component={header}/>
              
          </Switch>

        </main>

      </BrowserRouter>

    </div>
  );
}

export default App;
