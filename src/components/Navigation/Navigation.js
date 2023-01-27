// import scss from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItems = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  &.active {
    color: #212121;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #000000;
  }
`;

const Navigation = () => {
  return (
    <div>
      <div>
        <NavItems to="/">Home</NavItems>
        <NavItems to="/statistic">Statistic</NavItems>
      </div>
    </div>
  );
};
export default Navigation;
