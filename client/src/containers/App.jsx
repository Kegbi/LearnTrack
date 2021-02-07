import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../components/header/header";
import ErrorBoundary from "../components/error-boundary/error-boundary";
import Loader from "../components/loader/loader";

import { selectCurrentUser } from "../redux/user/user.selectors";
import { checkUserSession } from "../redux/user/user.actions";
import { AppContainer, MainContainer } from "./app.styles";
import ItemPage from "../pages/ItemPage/ItemPage";
import ItemsPage from "../pages/ItemsPage/ItemsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

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
        <MainContainer>
          <ErrorBoundary>
            <AppContainer>
              <Header location={window.location} user={user.currentUser} />
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route
                    exact
                    path={"/"}
                    render={() =>
                      user.currentUser ? (
                        <MainPage user={user.currentUser} />
                      ) : (
                        <Redirect to="/login" />
                      )
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
                  <Route
                    exact
                    path={"/books"}
                    render={() =>
                      user.currentUser ? (
                        <ItemsPage
                          type={"book"}
                          admin={user.currentUser.isAdmin}
                        />
                      ) : (
                        <Redirect to={"/login"} />
                      )
                    }
                  />
                  <Route
                    exact
                    path={"/courses"}
                    render={() =>
                      user.currentUser ? (
                        <ItemsPage
                          type={"course"}
                          admin={user.currentUser.isAdmin}
                        />
                      ) : (
                        <Redirect to={"/login"} />
                      )
                    }
                  />
                  <Route
                    exact
                    path={"/books/:id"}
                    render={(props) =>
                      user.currentUser ? (
                        <ItemPage
                          type={"book"}
                          id={props.match.params.id}
                          admin={user.currentUser.isAdmin}
                        />
                      ) : (
                        <Redirect to="/login" />
                      )
                    }
                  />
                  <Route
                    exact
                    path={"/courses/:id"}
                    render={(props) =>
                      user.currentUser ? (
                        <ItemPage
                          type={"course"}
                          id={props.match.params.id}
                          admin={user.currentUser.isAdmin}
                        />
                      ) : (
                        <Redirect to="/login" />
                      )
                    }
                  />
                  <Route component={NotFoundPage} />
                </Switch>
              </Suspense>
            </AppContainer>
          </ErrorBoundary>
        </MainContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
