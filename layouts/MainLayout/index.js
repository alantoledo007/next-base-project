import {Box} from '@material-ui/core';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function MainLayout({children}) {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="space-between"
      flexDirection="column">
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
