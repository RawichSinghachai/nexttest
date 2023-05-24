import React from 'react';
import type { AppProps } from 'next/app'
import { store } from '@/stores/store'
import { Provider } from 'react-redux'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { MuiTheme } from '@/components/MuiTheme';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </Provider>
  )
}