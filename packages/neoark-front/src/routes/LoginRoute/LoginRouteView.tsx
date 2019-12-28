import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import LoginForm from 'src/components/LoginForm';
import useStyles from './LoginRoute.styles';

const LoginRouteView = () => {
  const onSubmit = () => {};
  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
      <Box display="flex" justifyContent="center" alignItems="center" className={classes.box}>
        <LoginForm onSubmit={onSubmit} />
      </Box>
    </Container>
  );
};

export default LoginRouteView;
