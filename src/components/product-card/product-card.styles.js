import styled from 'styled-components';

const ProductCardContainer = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    & img {
      opacity: 0.8;
    }

    & button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const ImageContainer = styled.div`
  height: 18rem;
  && img {
    width: 100%;
    height: 18rem;
    object-fit: scale-down;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 6rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0.75rem 1rem;
`;

const Name = styled(Footer)`
  width: 90%;
  margin-bottom: 15px;
`;
const Price = styled(Footer)`
  width: 10%;
`;

export { ProductCardContainer, ImageContainer, Footer, Name, Price };
