import React from 'react';
import { IGet } from '../interfaces';
import styled from 'styled-components';
import { Recipe } from './Recipe';
type IRecipes = {
  recipes: IGet[];
};
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 15px;
  }
`;
export const RecipesList: React.FC<IRecipes> = ({ recipes }) => {
  if (recipes.length === 0) {
    return <p className="center">Пока рецептоа нет!</p>;
  }
  return (
    <Items>
      {recipes.map((el) => {
        return <Recipe recipe={el} key={el._id} />;
      })}
    </Items>
  );
};
