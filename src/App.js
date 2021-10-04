import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { home } from './components/Home';
import { Header } from './components/Header';
import { infoPerso } from './components/PersInfo';
import { proExp } from './components/ProExp';
import { formations } from './components/Formations';
import { skills } from './components/Skills';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main className="cv-content">

          <Switch>
            <Route path="/" exact component={home}/>
            <Route path="/infoPersonnelles" exact component={infoPerso}/>
            <Route path="/expProfessionnelles" exact component={proExp}/>
            <Route path="/formations" exact component={formations}/>
            <Route path="/competences" exact component={skills}/>
            <Route path="/infoComplementaires" exact component={infoPerso}/>
          </Switch>

        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
