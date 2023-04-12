import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from '@/theme'
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import MainLayout from "@/components/layout/main";

export default function App({ Component, pageProps }) {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
     <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <MainLayout>
        <CssBaseline />
        <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
      </CacheProvider>
    </>
  );
}
