import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  orange,
} from '@material-ui/core/colors';
import { Brightness7, Brightness4, GitHub } from '@material-ui/icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SearchForm from '../SearchForm/SearchForm';
import RepositoryList from '../RepositoryList/RepositoryList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  repositoryListPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  searchFormPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  }
}));

export default function Main() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? 'dark' : 'light';
  const displayAlt = darkState ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: '#B11E58'
      },
      secondary: {
        main: orange[600]
      }
    }
  });

  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const goToProjectGitHubRepository = () => {
    var win = window.open('https://github.com/Kidoncio', '_blank');
    win.focus();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>

        <CssBaseline />

        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography
              className={classes.title}
              color="inherit"
              component="h1"
              noWrap
              variant="h6"
            >
              GitHub Repository Search
            </Typography>

            <IconButton
              color="inherit"
              onClick={goToProjectGitHubRepository}
            >
              <GitHub />
            </IconButton>

            <IconButton
              aria-label={displayAlt}
              color="inherit"
              onClick={handleThemeChange}
            >
              {darkState
                ? <Brightness7 />
                : <Brightness4 /> 
              }
            </IconButton>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Container
            className={classes.container}
            maxWidth="lg"
          >
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
              >
                <Paper className={classes.searchFormPaper}>
                  <SearchForm />
                </Paper>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Paper className={classes.repositoryListPaper}>
                  <RepositoryList />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
