import React from 'react';
import { mount } from 'enzyme';
import { Navbar } from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Navbar', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(wrapper.length).toBe(1);
  });
});
