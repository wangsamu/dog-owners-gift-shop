import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartIcon } from '../../components/cart-icon/CartIcon';

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 1rem;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
const Logo = styled(Link)`
  /* padding: 25px; */

  && img {
    height: 40px;
    width: 40px;
  }
`;
const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  padding: 10px 1.5rem;
  cursor: pointer;
  font-size: 1.8rem;
`;

export { NavigationContainer, Logo, NavLinks, NavLink };
