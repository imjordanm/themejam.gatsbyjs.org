import React from 'react';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Header, jsx, Styled } from 'theme-ui';

import Monogram from './logo/monogram';
import Button from './Button';

const CustomHeader = () => {
  return (
    <Header
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        color: 'primary',
      }}
    >
      <Link sx={{ alignSelf: 'center' }} to="/">
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div sx={{ height: 25, marginRight: '2' }}>
            <Monogram height={25} />
          </div>
          <span
            sx={{
              color: 'gray.3',
              marginRight: '1',
              display: ['none', 'inline'],
            }}
          >
            Gatsby
          </span>
          <span>Theme Jam</span>
        </div>
      </Link>
      <nav>
        <Styled.ul
          sx={{
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
          }}
        >
          <li
            sx={{
              fontWeight: 400,
              marginRight: '4',
              display: ['none', 'list-item'],
            }}
          >
            <Link to="/contest-rules">Contest Rules</Link>
          </li>
          <li>
            <Link to="/submit">
              <Button radius={1}>
                Submit <span sx={{ display: ['none', 'inline'] }}>your</span>{' '}
                Theme
              </Button>
            </Link>
          </li>
        </Styled.ul>
      </nav>
    </Header>
  );
};

export default CustomHeader;