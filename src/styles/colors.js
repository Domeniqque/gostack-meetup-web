import { lighten, darken } from 'polished';

const pink = '#F94D6A';

export default {
  primary: pink,
  primaryLight: lighten(0.01, pink),
  primaryDark: darken(0.03, pink),

  dark: '#22202C',
  hotPurple: '#402845',
  blue: '#4DBAF9',
};
