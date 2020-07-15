import React, { useState, useEffect } from 'react';
import { RecipesList } from '../components/RecipesList';
import { IPost } from '../interfaces';
import QS from '../utils/queries';

export const RecipesPage: React.FC = () => {
  const [recipes, setRecipes] = useState<IPost[]>([]);

  useEffect(() => {
    const response = QS.get();
    response.then((res) => {
      const data = res.data as IPost[];
      setRecipes(data);
    });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('recipes', JSON.stringify(recipes));
  // }, [recipes]);

  return (
    <React.Fragment>
      <RecipesList recipes={recipes} />
    </React.Fragment>
  );
};
