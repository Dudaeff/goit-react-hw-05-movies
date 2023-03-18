import styled from 'styled-components';

const CastsMap = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const CastsMapItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  width: 200px;
  row-gap: 5px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
`;

export { CastsMap, CastsMapItem };
