import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { RecipesPage } from './pages/RecipesPage';
import { AddRecipe } from './pages/AddRecipe';
import { Recipe } from './pages/Recipe';
import { EditRecipe } from './pages/EditRecipe';
import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route component={RecipesPage} path="/" exact />
          <Route component={EditRecipe} path="/edit/:id" />
          <Route component={Recipe} path="/recipe/:id" />
          <Route component={AddRecipe} path="/add" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
