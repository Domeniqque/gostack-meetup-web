import styled from 'styled-components';

export const MeetupDetails = styled.div`
  figure {
    width: 100%;
    height: 400px;
    border-radius: 4px;
    color: #fff;
    padding: 0 15px;
    margin: 10px 0;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  p {
    font-size: 18px;
    color: #fff;
    line-height: 32px;
    margin: 20px 0;
  }

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;

      time,
      address {
        padding-left: 10px;
        font-size: 16px;
      }

      time,
      address,
      svg {
        color: #fff;
        opacity: 0.6;
      }
    }
  }
`;
