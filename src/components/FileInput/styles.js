import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.label`
  width: 100%;
  min-height: 400px;
  background: #000;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 0 15px;
  margin: 5px 0;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  opacity: ${props => (props.hasPreview ? 1 : 0.6)};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  img {
    max-width: 100%;
  }

  input {
    display: none;
  }
`;

export const Loader = styled.div`
  height: 3px;
  background: ${colors.primary};
  position: absolute;
  bottom: 0;
  width: ${props => props.progress}%;
  left: 0;
  visibility: ${props => (props.progress < 100 ? 'visible' : 'hidden')};
  transition: width 400ms ease, visibility 1s ease;
`;
