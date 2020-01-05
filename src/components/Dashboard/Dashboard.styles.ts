import { Theme, makeStyles } from '@material-ui/core';

export const drawerWidth = 256;

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const multipleBoxShadow = (n: number) => {
  let value = `${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF`;

  for (let i = 2; i < n; i += 1) {
    value = `${value} , ${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF`;
  }

  return value;
};

const shadowsSmall = multipleBoxShadow(700);
const shadowsMedium = multipleBoxShadow(200);
const shadowsBig = multipleBoxShadow(100);
const starSpeedBase = 100; // higher value will slow the animation

export default makeStyles((theme: Theme) => ({
  '@keyframes animStar': {
    from: {
      transform: 'translateY(0px)',
    },
    to: {
      transform: 'translateY(-2000px)',
    },
  },
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    color: 'rgba(255, 255, 255, 0.7)',
    position: 'relative',
  },
  mainBackgroundImage: {
    background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    filter: 'blur(1px)',
    zIndex: -1,
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row',
  },
  infoNav: {
    height: '100%',
  },
  stars1: {
    width: '1px',
    height: '1px',
    background: 'transparent',
    boxShadow: shadowsSmall,
    animation: `$animStar ${starSpeedBase}s linear infinite`,
    '&:after': {
      content: ' ',
      position: 'absolute',
      top: '2000px',
      width: '1px',
      height: '1px',
      background: 'transparent',
      boxShadow: shadowsSmall,
    },
  },
  stars2: {
    width: '2px',
    height: '2px',
    background: 'transparent',
    boxShadow: shadowsMedium,
    animation: `$animStar ${starSpeedBase * 2}s linear infinite`,
    '&:after': {
      content: ' ',
      position: 'absolute',
      top: '2000px',
      width: '2px',
      height: '2px',
      background: 'transparent',
      boxShadow: shadowsMedium,
    },
  },
  stars3: {
    width: '3px',
    height: '3px',
    background: 'transparent',
    boxShadow: shadowsBig,
    animation: `$animStar ${starSpeedBase * 3}s linear infinite`,
    '&:after': {
      content: ' ',
      position: 'absolute',
      top: '2000px',
      width: '3px',
      height: '3px',
      background: 'transparent',
      boxShadow: shadowsBig,
    },
  },
  mainRoute: {
    zIndex: 100,
    position: 'relative',
  },
}));
