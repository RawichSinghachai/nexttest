import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const MuiTheme = createTheme({
  palette: {
    
  },
});


// const theme = createTheme({
//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1200,
//     },
//   },
// });

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//     desktop: true;
//   }
// }