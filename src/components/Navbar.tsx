import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import styled from 'styled-components';
import Menu from './Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '6rem',
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    title2: {
      cursor: 'pointer',
      fontSize: '16px',
    },
  }),
);

export const MyMenu = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  a:first-child {
    margin-right: 20px;
  }
`;
export const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h4">
            <span style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
              Cook + Book
            </span>
          </Typography>
          <MyMenu>
            <Hidden xsDown>
              <NavLink to="/">
                <Typography variant="h6" className={classes.title2}>
                  Рецепты
                </Typography>
              </NavLink>

              <NavLink to="/add">
                <Typography variant="h6" className={classes.title2}>
                  Создать рецепт
                </Typography>
              </NavLink>
            </Hidden>
          </MyMenu>
          <div>
            <Menu open={open} anchorEl={anchorEl} handleClose={handleClose} />
            <Hidden smUp>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <i className="material-icons">menu</i>
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
