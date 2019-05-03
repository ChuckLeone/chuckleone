import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function Index() {
  return <h2>Home</h2>;
}

function World0() {
  return <h2>VR Gallery</h2>;
}

function AppRouter(props) {
  const { classes } = props;

  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                {' '}
                <Route exact path="/" component={Index} />
                <Route path="/World0" component={World0} />
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/World0/">VR Gallery</Link>
                </li>
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </div>
    </Router>
  );
}

AppRouter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppRouter);
