import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "../redux/user/user.actions";
import { selectCurrentUser } from "../redux/user/user.selectors";

import Header from "../components/header/header";
import ErrorBoundary from "../components/error-boundary/error-boundary";
import Loader from "../components/loader/loader";

import { AppContainer, MainContainer } from "./app.styles";

import ItemPage from "../pages/ItemPage/ItemPage";
import ItemsPage from "../pages/ItemsPage/ItemsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import { routesConstants } from "../constants/routesConstants";
import ProtectedRoute from "../components/protected-route";

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
                  <ProtectedRoute
                    exact
                    path={routesConstants.home}
                    redirectTo={routesConstants.login}
                  >
                    <MainPage user={user.currentUser} />
                  </ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path={routesConstants.achievements}
                    redirectTo={routesConstants.login}
                  >
                    <AchievementsPage />
                  </ProtectedRoute>
                  <Route
                    exact
                    path={routesConstants.login}
                    render={() =>
                      user.currentUser ? (
                        <Redirect to={routesConstants.home} />
                      ) : (
                        <LoginPage />
                      )
                    }
                  />
                  <Route
                    exact
                    path={routesConstants.signup}
                    render={() =>
                      user.currentUser ? (
                        <Redirect to={routesConstants.home} />
                      ) : (
                        <SignUpPage />
                      )
                    }
                  />
                  <ProtectedRoute
                    exact
                    path={routesConstants.books}
                    redirectTo={routesConstants.login}
                  >
                    <ItemsPage type={"book"} admin={user.currentUser.isAdmin} />
                  </ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path={routesConstants.courses}
                    redirectTo={routesConstants.login}
                  >
                    <ItemsPage
                      type={"course"}
                      admin={user.currentUser.isAdmin}
                    />
                  </ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path={routesConstants.book}
                    redirectTo={routesConstants.login}
                  >
                    <ItemPage type={"book"} admin={user.currentUser.isAdmin} />
                  </ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path={routesConstants.course}
                    redirectTo={routesConstants.login}
                  >
                    <ItemPage
                      type={"course"}
                      admin={user.currentUser.isAdmin}
                    />
                  </ProtectedRoute>
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
