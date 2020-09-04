import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../components/header/header.component";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";

import { selectCurrentUser } from "../redux/user/user.selectors";
import { checkUserSession } from "../redux/user/user.actions";
import { Container } from "./app.styles";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage/SignUpPage"));
const AchievementsPage = lazy(() =>
  import("../pages/AchievementsPage/AchievementsPage")
);

const App = () => {
  const user = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Container>
          <ErrorBoundary>
            <Header user={user.currentUser} />
            <Switch>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Route
                  exact
                  path={"/"}
                  render={() =>
                    user.currentUser ? <MainPage /> : <Redirect to="/login" />
                  }
                />
                <Route
                  exact
                  path={"/achievements"}
                  render={() =>
                    user.currentUser ? (
                      <AchievementsPage />
                    ) : (
                      <Redirect to="/login" />
                    )
                  }
                />
                <Route
                  exact
                  path={"/login"}
                  render={() =>
                    user.currentUser ? <Redirect to="/" /> : <LoginPage />
                  }
                />
                <Route
                  exact
                  path={"/signup"}
                  render={() =>
                    user.currentUser ? <Redirect to="/" /> : <SignUpPage />
                  }
                />
              </Suspense>
            </Switch>
          </ErrorBoundary>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
