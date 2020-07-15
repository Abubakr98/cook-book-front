import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { IGet } from '../interfaces';
import Button from '@material-ui/core/Button';
import { getDate } from '../utils/getNoramlDate';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);
type IRecipe = {
  recipe: IGet;
};
export const Recipe: React.FC<IRecipe> = ({ recipe }) => {
  const classes = useStyles();
  const history = useHistory();
  const { name, description, _id } = recipe;
  const date = getDate(new Date(recipe.date));

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0].toLocaleUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => history.push(`/edit/${_id}`)}>
            <i className="material-icons">edit</i>
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <CardActions>
          <Button size="small" color="primary" onClick={() => history.push(`/recipe/${_id}`)}>
            подробней
          </Button>
        </CardActions>
      </CardActions>
    </Card>
  );
};
