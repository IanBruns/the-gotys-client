import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <Switch>
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>

      <footer>
        <p>
          Made by Ian Bruns
        </p>
      </footer>
    </div>
  );
}

export default App;
