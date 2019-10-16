import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
