import React from 'react';
import { mount } from 'enzyme';
import { RecipeText } from '../components/RecipeText';

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

describe('RecipeText', () => {
  it('Should be "testName"', () => {
    const wrapper = mount(<RecipeText recipe={recipe} />);
    expect(wrapper.text().includes('testName')).toBe(true);
  });
});
