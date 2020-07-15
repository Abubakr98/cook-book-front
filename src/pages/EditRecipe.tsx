import React, { useRef, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useParams } from 'react-router';
import { IGet } from '../interfaces';
import QS from '../utils/queries';
import { MyPaper, Item, Form } from './comStyles';
const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
export const EditRecipe: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const [des, setDes] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<IGet>();
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  useEffect(() => {
    const response = QS.getOne(id);
    response.then((res) => {
      const data = res.data as IGet;
      setRecipe(data);
      setIngredients(data.ingredients as []);
      setDes(data.description);
      setName(data.name);
    });
  }, []);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && ref.current!.value.trim()) {
      setIngredients([ref.current!.value, ...ingredients]);
      ref.current!.value = '';
    }
  };
  const removeHandler = (id: number) => {
    setIngredients((prev) => prev.filter((todo, i) => id !== i));
  };
  const onEdit = () => {
    if (!des || !name) {
      setError(true);
      return;
    }
    setError(false);
    const data = QS.postEdit(
      {
        name,
        description: des,
        ingredients,
        date: new Date(),
      },
      id,
    );
    data.then(() => {
      setOpen(true);
    });
  };

  if (!recipe) {
    return <p className="center">Загрузка...</p>;
  }
  return (
    <MyPaper elevation={3}>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h3" color="textPrimary">
          Отредактируйте рецепт
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Для этого добавьте описания, и ингредиенты для рецепта.
        </Typography>
      </div>
      <Form>
        <div>
          <Button variant="contained" color="primary" style={{ margin: '0 auto', display: 'block' }} onClick={onEdit}>
            Сохранить рецепт
          </Button>
        </div>
        <TextField
          inputRef={ref}
          label="Название рецепта"
          inputProps={{ 'aria-label': 'description' }}
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={error}
          helperText={error && 'Обезательное поле'}
        />
        <TextField
          id="outlined-textarea"
          label="Описание рецепта"
          multiline
          // variant='outlined'
          onChange={(e) => setDes(e.target.value)}
          value={des}
          error={error}
          helperText={error && 'Обезательное поле'}
        />
        <TextField
          inputRef={ref}
          label="Ингридиенты, нажмите Enter что бы добавить"
          inputProps={{ 'aria-label': 'description' }}
          onKeyPress={keyPressHandler}
        />
        <div>
          {ingredients &&
            ingredients.map((el: string, id: number) => {
              return (
                <Item key={id}>
                  <Typography variant="body1">{el}</Typography>
                  <div>
                    <i className="material-icons" onClick={() => removeHandler(id)}>
                      delete
                    </i>
                  </div>
                </Item>
              );
            })}
        </div>
      </Form>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Рецепт успешно изменено
        </Alert>
      </Snackbar>
    </MyPaper>
  );
};
