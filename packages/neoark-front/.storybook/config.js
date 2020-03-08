import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryRouter from 'storybook-react-router';
import requireContext from 'require-context.macro';

import './styles.css';
import theme from 'src/theme';
import planetMock from 'src/common/resources/mocks/planet.mock';

const generateClassName = (rule, styleSheet) => `${styleSheet.options.classNamePrefix}-${rule.key}`;

const store = createStore(() => ({
  planets: {
    planets: [planetMock],
    currentPlanetIndex: 0,
    isLoading: false,
    error: null,
  },
}));

const withMUI = storyFn => (
  <Provider store={store}>
      <StylesProvider generateClassName={generateClassName} >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {storyFn()}
        </ThemeProvider>
      </StylesProvider>
    </Provider>
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
