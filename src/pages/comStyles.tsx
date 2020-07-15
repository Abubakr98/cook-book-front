import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Form = styled.div`
  margin: 0 auto;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  & > div {
    max-width: 720px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
export const Item = styled.div`
  background-color: #cbdeed;
  margin: 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  & > div {
    cursor: pointer;
    color: #f50057;
  }
`;
export const MyPaper = styled(Paper)`
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
  h4 {
    margin-bottom: 40px;
    font-weight: bold;
  }
`;
