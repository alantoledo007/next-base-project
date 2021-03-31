import Head from 'next/head';
import Cover from '../components/Cover';
import MainLayout from '../layouts/MainLayout';
import {Box, Container, Paper, Typography} from '@material-ui/core';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Contact us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover
        title="Contact our team"
        title_props={{align: 'center', paragraph: false}}
      />
      <Box py={5}>
        <Container>
          <Box
            component={Paper}
            px={2}
            py={4}
            maxWidth={600}
            mx="auto"
            align="center">
            <Typography component="h2" variant="h5">
              FORM CONTACT
            </Typography>
            <Typography
              component="p"
              variant="overline"
              paragraph
              align="center">
              Please, complete the form
            </Typography>
            <ContactForm />
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
}
