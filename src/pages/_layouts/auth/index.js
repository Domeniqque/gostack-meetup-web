import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, Content } from './styles';

export default function Auth({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

Auth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
