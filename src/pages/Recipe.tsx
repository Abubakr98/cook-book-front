import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import QS from '../utils/queries';
import { RecipeText } from '../components/RecipeText';
import Paper from '@material-ui/core/Paper';
import { IGet } from '../interfaces';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const MyPaper = styled(Paper)`
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
  h4 {
    margin-bottom: 40px;
    font-weight: bold;
  }
`;

export const Recipe: React.FC = () => {
  const [recipe, setRecipe] = useState<IGet>();
  const [showOV, setShowOV] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const response = QS.getOne(id);
    response.then((res) => {
      const data = res.data as IGet;
      setRecipe(data);
    });
  }, []);

  if (!recipe) {
    return <p className="center">Загрузка...</p>;
  }

  const OV = recipe.oldVersions!;

  return (
    <div>
      <MyPaper elevation={3}>
        <div style={{ textAlign: 'center' }}>
          <RecipeText recipe={recipe} />
          <div style={{ textAlign: 'right' }}>
            <Button size="small" color="primary" onClick={() => setShowOV((prev) => !prev)}>
              Старые версии
            </Button>
          </div>
          {showOV &&
            (OV.length !== 0 ? (
              <>
                <Typography variant="body1" color="textPrimary">
                  Старые версии
                </Typography>
                {OV.map((el, i) => {
                  return (
                    <div key={el._id}>
                      <Divider style={{ height: '3px', margin: '15px 0 15px 0' }} />
                      <RecipeText recipe={el} />
                    </div>
                  );
                })}
              </>
            ) : (
              <Typography variant="body1" color="textSecondary">
                Старых версий нет
              </Typography>
            ))}
        </div>
      </MyPaper>
    </div>
  );
};
