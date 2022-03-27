import { Fragment } from 'react';
import routes from '@/routes/routes';
import { Redirect, Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => {
            const components = [
              ...(route.guards || []),
              route.component,
              Fragment,
            ];

            const routeComponents = components
              .reverse()
              .reduce((Prev, Curr) => <Curr {...props}>{Prev}</Curr>);

            return routeComponents;
          }}
        ></Route>
      ))}
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default AppRoutes;
