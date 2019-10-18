import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  height: 300px;
  background: #000;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 0 15px;
  margin: 5px 0;
  font-size: 18px;
  transition: box-shadow 200ms;
  cursor: pointer;
  overflow: hidden;
  opacity: ${props => (props.hasPreview ? 1 : 0.6)};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 300px;
  }

  input {
    display: none;
  }
`;
