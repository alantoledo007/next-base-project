import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
