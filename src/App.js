import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TokenService from './services/token-service';
import Header from './components/Header/Header';
import LandingPage from './routes/LandingPage/LandagePage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import LoginPage from './routes/LoginPage/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      RoutinesApiService.getAllRoutines()
        .then(res => {
          setReviews(res);
        })
    }
  }, [isLoggedIn]);

  function whenLoggedIn() {
    setIsLoggedIn(true);
  }

  function whenLoggedOut() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header>
        <Header
          whenLoggedOut={whenLoggedOut} />
      </header>

      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={LoginPage}
            whenLoggedIn={whenLoggedIn}
          />
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
