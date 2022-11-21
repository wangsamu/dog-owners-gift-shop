import styled from 'styled-components';
import { ReactComponent as CartIconSVG } from '../../assets/shopping-bag.svg';

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 1.5rem;
`;

const ShoppingIcon = styled(CartIconSVG)`
  width: 40px;
  height: 40px;
`;

const ItemCont = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export { CartIconContainer, ShoppingIcon, ItemCont };
