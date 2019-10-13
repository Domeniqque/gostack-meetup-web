import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, ${colors.dark}, ${colors.hotPurple});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 42px;
    height: 41px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 40px 0 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      padding: 0 15px;
      margin: 5px 0;
      height: 50px;
      font-size: 18px;
      transition: box-shadow 200ms;

      &:active,
      &:focus {
        box-shadow: 2px 4px 1px rgba(0, 0, 0, 0.2);
      }

      &::placeholder {
        opacity: 50%;
      }
    }

    span {
      margin-bottom: 8px;
      align-self: flex-start;
      color: ${colors.primary};
    }

    button {
      height: 50px;
      border: 0;
      color: #fff;
      padding: 0 15px;
      margin: 10px 0;
      border-radius: 4px;
      background: ${colors.primaryLight};
      font-size: 18px;
      font-weight: bold;
      transition: background 200ms;

      &:hover {
        background: ${colors.primaryDark};
      }
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    opacity: 0.6;

    &:hover {
      opacity: 0.8;
    }
  }
`;
