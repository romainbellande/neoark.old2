import { addDecorator } from '@storybook/react';
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import '!style-loader!css-loader!sass-loader!./styles.scss';
import theme from 'src/theme';

const withMUI = storyFn => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(
  withInfo({
    inline: true,
    header: false,
  }),
);

addDecorator(withMUI);
