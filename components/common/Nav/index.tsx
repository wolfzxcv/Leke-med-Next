import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = () =>(
    <StyledNav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </li>
      </ul>
    </StyledNav>
);


const StyledNav = styled.div`
  ul {
    background: #333;
    color: #fff;
    list-style: none;
    li {
      display: flex;
      a {
        margin: 10px;
        font-size: 36px;
        color: yellow;
        text-decoration: none;
      }
    }
  }
`;

export default Nav;
