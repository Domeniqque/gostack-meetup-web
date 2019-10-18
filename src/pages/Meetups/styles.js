import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 920px;
  margin: 50px auto 0;

  padding: 0 10px 30px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 32px;
    }

    a {
      border: 0;
      color: #fff;
      padding: 6px 30px;
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

  form {
    display: flex;
    flex-direction: column;
    margin: 40px 0 20px;

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      color: #fff;
      padding: 0 15px;
      margin: 5px 0;
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

    input {
      height: 50px;
    }

    textarea {
      min-height: 200px;
      padding: 16px;
      resize: vertical;
    }

    span {
      margin-bottom: 8px;
      align-self: flex-start;
      color: ${colors.primary};
    }

    & > button {
      align-self: flex-end;
      height: 50px;
      border: 0;
      color: #fff;
      padding: 6px 30px;
      margin: 25px 0;
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
`;
