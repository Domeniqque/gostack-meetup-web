import styled from 'styled-components';

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

  img {
    max-width: 100%;
  }

  input {
    display: none;
  }
`;
