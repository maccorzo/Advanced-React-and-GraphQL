import Link from 'next/link';
import NavStyled from './styles/NavStyles';
import User from './User';
const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyled>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyled>
    )}
  </User>
);

export default Nav;
