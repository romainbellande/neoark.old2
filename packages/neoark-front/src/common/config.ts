const okta = {
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID || 'testing',
  pkce: !!process.env.REACT_APP_OKTA_CLIENT_ID,
  postLogoutRedirectUri: `${window.location.origin}/login`,
};

export default {
  okta,
};
