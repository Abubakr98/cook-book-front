import React from 'react';
import { mount } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import { AddRecipe } from '../pages/AddRecipe';

describe('RecipeList', () => {
  it('RecipeList has recipe', () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(TextField).length).toBe(3);
  });
});
