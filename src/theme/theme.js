import { extendTheme } from '@chakra-ui/react';

// import "@fontsource/poppins";
// import "@fontsource/solway";
import "@fontsource/space-grotesk"
import "@fontsource/fira-sans"
// Supports weights 100-900
import '@fontsource-variable/raleway';
// Supports weights 300-900
import '@fontsource-variable/rubik';
// Supports weights 100-900
import '@fontsource-variable/public-sans';

const theme = extendTheme({
  // fonts: {
  //   heading: `"Public Sans", sans-serif`,
  //   body: `"Rubik", sans-serif`,
  // },
  fonts: {
    heading: `'Raleway Variable', sans-serif`,
    body: `'Raleway Variable', sans-serif`,
  },
  colors: {
    primary: {
      50: '#ffffff',
      100: '#990033',
      200: '#4b0016',
      300: '#A084CA',
      400: '#BFACE0',
      500: '#EBC7E8',
      600: '#1e88e5',
      700: '#ffffff1f',
      800: '#ffffff33',
      900: '#242424',
      1000: '#282828',
      1100: '#1f1f1f',
      1200: '#1a1a1a',
      1300: '#121212',
      1400: '#0c0c0c',
      1500: '#111111',
    },
  },
})


export default theme;