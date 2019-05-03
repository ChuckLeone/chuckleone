import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Index from '../src/components/index';
import Portfolio from '../src/components/portfolio';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function World0() {
  return <h2>VR Gallery</h2>;
}
class AppRouter extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Router>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="Open Menu"
                    onClick={this.handleToggle}
                  >
                    <Menu />
                  </IconButton>
                  <Popper
                    open={open}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList>
                              <MenuItem onClick={this.handleClose}>
                                <Link to="/">Home</Link>
                              </MenuItem>
                              <MenuItem onClick={this.handleClose}>
                                <Link to="/World0/">VR Gallery</Link>
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Route exact path="/" component={Index} />
                  <Route path="/World0" component={World0} />
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <Route exact path="/" component={Index} />
              <Route path="/World0" component={World0} />
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppRouter);
