import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto 0;

  padding: 0 10px 30px;

  form {
    display: flex;
    flex-direction: column;

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

    hr {
      border: 0;
      border-bottom: 1px solid #979797;
      opacity: 0.6;
      margin-top: 15px;
      margin-bottom: 12px;
    }

    button {
      width: 182px;
      align-self: flex-end;
      height: 50px;
      border: 0;
      color: #fff;
      padding: 0 15px;
      margin: 30px 0;
      border-radius: 4px;
      background: ${colors.primaryLight};
      font-size: 16px;
      font-weight: bold;
      transition: background 200ms;

      &:hover {
        background: ${colors.primaryDark};
      }
    }
  }
  }
`;
