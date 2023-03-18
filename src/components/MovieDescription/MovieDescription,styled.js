import styled from 'styled-components';

const DescriptionView = styled.div`
  display: flex;
  column-gap: 10px;
`;

const ImageWrapper = styled.div`
  width: 500px;
`;

const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-bottom: 25px;
`;

const DescriptionListItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export { ImageWrapper, DescriptionList, DescriptionView, DescriptionListItem };
