import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InformationLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const GoBackBtn = styled(Link)`
  display: inline-block;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  color: white;
  background: black;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export { GoBackBtn, InformationLinksList };
