import styled from 'styled-components';

export const MeetupList = styled.ul`
  margin: 40px 0 20px;

  li {
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    transition: background 200ms;

    &:hover {
      box-shadow: 2px 4px 1px rgba(0, 0, 0, 0.2);
    }

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      padding: 15px 20px;
      color: #fff;

      div {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        strong {
          font-size: 18px;
        }

        time {
          margin-right: 30px;
          font-size: 16px;
          color: #fff;
          opacity: 0.6;
        }

        svg {
          display: block;
        }
      }
    }
  }
`;
