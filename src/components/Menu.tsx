import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

interface IMenuProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose(): void;
}

const MyMenu: React.FC<IMenuProps> = ({ open, anchorEl, handleClose }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <NavLink to="/">
          <Typography variant="body1" color="textPrimary">
            Рецепты
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <NavLink to="/add">
          <Typography variant="body1" color="textPrimary">
            Создать рецепт
          </Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );
};
export default MyMenu;
