import styled from 'styled-components';

const CategoryContainer = styled.div`
  padding: 1.5rem 5rem;
  width: 100vw;
`;

const CategoryItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 5rem;
`;
const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
export { CategoryContainer, CategoryTitle, CategoryItemsContainer };
