import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ReviewsApiService from './services/reviews-api-service'
import TokenService from './services/token-service';
import Header from './components/Header/Header';
import LandingPage from './routes/LandingPage/LandagePage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import PublicOnlyRoute from './utils/PublicOnlyRoute';
import PrivateRoute from './utils/PrivateRoute'
import LoginPage from './routes/LoginPage/LoginPage';
import HomePage from './routes/HomePage/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      ReviewsApiService.getAllReviews()
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
          <PrivateRoute
            path={'/home'}
            component={HomePage}
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
