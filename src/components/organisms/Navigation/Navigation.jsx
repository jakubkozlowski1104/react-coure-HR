// import { StyledNav, StyledLink } from './Navigation.styles';

// const Navigation = () => {
//   return (
//     <StyledNav>
//       <StyledLink to="/">Home</StyledLink>
//       <StyledLink to="/add-user">Add user</StyledLink>
//       <StyledLink to="/register">Register</StyledLink>
//     </StyledNav>
//   );
// };

// export default Navigation;

import { Logo, StyledLink, Wrapper } from '../Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/XD">Settings</StyledLink>
      <StyledLink to="/asdasd">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
