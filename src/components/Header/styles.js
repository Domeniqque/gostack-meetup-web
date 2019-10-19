import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  background: #17171b;
`;

export const Content = styled.div`
  max-width: 920px;
  height: 92px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 32px;
    height: 31px;
  }

  nav {
    display: flex;
    align-items: center;

    & > button {
      border: 0;
      padding: 6px 20px;
      margin: 10px 0;
      border-radius: 4px;
      color: #fff;
      background: ${colors.primaryLight};
      font-size: 16px;
      font-weight: bold;
      transition: background 200ms;

      &:hover {
        background: ${colors.primaryDark};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 30px;

  strong {
    color: #fff;
    font-size: 16px;
  }

  a {
    background: none;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    opacity: 0.6;

    &:hover {
      opacity: 0.8;
    }
  }
`;
