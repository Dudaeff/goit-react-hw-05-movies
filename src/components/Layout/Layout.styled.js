import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 40px;
  width: 100%;
  height: 50px;
  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 20px;
`;

const StyledLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: black;
  transition: color 250ms ease-in-out;

  &:hover,
  :focus {
    color: orangered;
  }
`;

export { Header, LinkList, StyledLink, Container };
