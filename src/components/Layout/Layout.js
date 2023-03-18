import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, LinkList, StyledLink, Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </LinkList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
