import React, { useEffect } from 'react';
import { oktaSignIn } from 'src/common/okta';

const LoginRouteView = () => {
  useEffect(() => {
    oktaSignIn.renderEl(
      { el: '#okta-login-container' },
      function success(res: any) {
        // Nothing to do in this case, the widget will automatically redirect
        // the user to Okta for authentication, then back to this page if successful
      },
      function error(err: any) {
        // handle errors as needed
        console.error(err);
      },
    );
  }, []);

  return (
    <div>
      <div id="okta-login-container"></div>
    </div>
  );
};

// const LoginRouteView = ({ auth }: any) => {
//   const [authenticated, setAuthenticated] = useState(null);
//   const onSubmit = () => {};
//   const classes = useStyles();
//   const login = () => auth.login('/');
//   const logout = () => auth.logout('/login');

//   useEffect(() => {
//     const promiseAuth = async () => {
//       const authenticatedResponse = await auth.isAuthenticated();
//       if (authenticatedResponse !== authenticated) {
//         setAuthenticated(authenticatedResponse);
//       }
//     }

//     promiseAuth();
//     return () => {

//     };
//   }, [auth.isAuthenticated, authenticated])

//   return authenticated ?
//     <button onClick={logout}>Logout</button> :
//     <button onClick={login}>Login</button>;
// return (<div>
//   <div id="okta-login-container"></div>
// </div>)
// };

export default LoginRouteView;
