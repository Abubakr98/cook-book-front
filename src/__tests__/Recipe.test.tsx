import React from 'react';
import { mount } from 'enzyme';
import { Recipe } from '../components/Recipe';
import { BrowserRouter as Router } from 'react-router-dom';

const recipe = {
  name: 'testName',
  description: 'test',
  ingredients: ['test', 'test'],
  date: new Date(),
  oldVersions: [
    {
      name: 'string',
      description: 'string',
      ingredients: ['test', 'test'],
      date: new Date(),
      _id: 'string',
      id: 1,
    },
  ],
  _id: 'string',
  __v: 1,
};

describe('Recipe item', () => {
  it('Should be "testName"', () => {
    const wrapper = mount(
      <Router>
        <Recipe recipe={recipe} />
      </Router>,
    );
    expect(wrapper.text().includes('testName')).toBe(true);
  });
});
