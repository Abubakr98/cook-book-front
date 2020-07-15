import React from 'react';
import Typography from '@material-ui/core/Typography';
import { IGet } from '../interfaces';
import { getDate } from '../utils/getNoramlDate';
import styled from 'styled-components';

const Ingredients = styled.div`
  margin-bottom: 10px;
`;
interface IRecipe {
  recipe: IGet;
}

export const RecipeText: React.FC<IRecipe> = ({ recipe }) => {
  const { name, description, ingredients } = recipe;

  const date = getDate(recipe.date);
  return (
    <>
      <Typography variant="h4" color="textPrimary">
        {name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {date}
      </Typography>
      {ingredients.length !== 0 && (
        <Ingredients>
          <Typography style={{ textAlign: 'left', margin: '15px 5px' }} variant="body1" color="textPrimary">
            Ингридиенты:
          </Typography>
          {ingredients.map((el, i) => {
            return (
              <Typography
                key={i}
                style={{ textAlign: 'left', margin: '10px 0 0 30px' }}
                variant="body1"
                color="textPrimary"
              >
                {`${i + 1}) ${el}`}
              </Typography>
            );
          })}
        </Ingredients>
      )}
      <Typography variant="h5" color="textPrimary">
        Описание
      </Typography>
      <Typography style={{ textAlign: 'left', padding: '30px' }} variant="body1" color="textPrimary">
        {description}
      </Typography>
    </>
  );
};
