import React from 'react';
import { mount } from 'enzyme';
import Menu from '../components/Menu';
import { MenuItem } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

const resizeWindow = (x: number, y: number) => {
  const myWindow = window as any;
  myWindow.innerWidth = x;
  myWindow.innerHeight = y;
  myWindow.dispatchEvent(new Event('resize'));
};

describe('Menu', () => {
  it('renders without crashing', () => {
    let MyDiv: HTMLDivElement | null = document.createElement('div');
    const handleClose = () => {
      MyDiv = null;
    };
    const menu = mount(
      <Router>
        <Menu open={false} anchorEl={MyDiv} handleClose={handleClose} />
      </Router>,
    );
    resizeWindow(320, 600);
    expect(menu.find(MenuItem).length).toBe(2);
  });
});
