import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";

import AppMenu from "./AppMenu";

import BisectionMethod from "./01-ROOT-OF-EQUATION/Bisection-Method";
import FalsePositionMethod from "./01-ROOT-OF-EQUATION/False_position";

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/" exact component={BisectionMethod} />
              <Route path="/Bisection-Method" component={BisectionMethod} />
              <Route
                path="/False-position-Method"
                component={FalsePositionMethod}
              />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "#535454",
    color: "#fff"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export default App;
