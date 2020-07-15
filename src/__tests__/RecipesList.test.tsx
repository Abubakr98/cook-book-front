import React from 'react';
import { mount } from 'enzyme';
import { RecipesList } from '../components/RecipesList';
import { Recipe } from '../components/Recipe';

const recipe = [
  {
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
  },
];

describe('RecipeList', () => {
  it('RecipeList has recipe', () => {
    const wrapper = mount(<RecipesList recipes={recipe} />);
    expect(wrapper.find(Recipe).length).toBe(1);
  });
});
