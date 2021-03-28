import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {CssBaseline} from '@material-ui/core';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';
import Loader from '../components/Loader';

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingTrue = () => {
      setLoading(true);
    };
    const loadingFalse = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', loadingTrue);
    router.events.on('routeChangeError', loadingFalse);
    router.events.on('routeChangeComplete', loadingFalse);

    return () => {
      router.events.off('routeChangeStart', loadingTrue);
      router.events.off('routeChangeError', loadingFalse);
      router.events.off('routeChangeComplete', loadingFalse);
    };
  }, []);

  if (loading) return <Loader />;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
