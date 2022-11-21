import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
const Logo = styled(Link)`
  /* padding: 25px; */

  && img {
    height: 50px;
    width: 50px;
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
  padding: 10px 25px;
  cursor: pointer;
  font-size: 1.8rem;
`;

export { NavigationContainer, Logo, NavLinks, NavLink };
