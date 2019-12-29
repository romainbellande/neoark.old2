import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryRouter from 'storybook-react-router';
import requireContext from 'require-context.macro';

import './styles.css';
import theme from 'src/theme';

const withMUI = storyFn => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(
  withInfo({
    inline: false,
    header: false,
  }),
);

addDecorator(withMUI);

addDecorator(StoryRouter());

const req = requireContext('../src', true, /\.stories\.tsx?$/);

configure(req, module);
