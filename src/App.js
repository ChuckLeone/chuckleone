import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
import Theme from '../src/theme/theme';
import Index from '../src/components/index';
import Portfolio from '../src/components/portfolio';
import Music from '../src/components/music';
import Games from '../src/components/games';

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
    const { open } = this.state;

    return (
      <MuiThemeProvider theme={Theme}>
        <Router>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <AppBar
                  position="static"
                  color="default"
                  className="App-header"
                >
                  <Toolbar>
                    <IconButton
                      color="primary"
                      aria-label="Open Menu"
                      onClick={this.handleToggle}
                    >
                      <Menu />
                    </IconButton>
                    Chuck Leone
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
                          <Paper style={Theme.menu}>
                            <ClickAwayListener onClickAway={this.handleClose}>
                              <MenuList>
                                <MenuItem onClick={this.handleClose}>
                                  <Link to="/">Home</Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                  <Link to="/portfolio/">Portfolio</Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                  <Link to="/music/">Music</Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                  <Link to="/games/">Games</Link>
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Toolbar>
                </AppBar>
              </Grid>
            </Grid>
            <Route exact path="/" component={Index} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/games" component={Games} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default AppRouter;
