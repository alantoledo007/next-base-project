import {Box, Container, Paper} from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({children}) {
  return (
    <Box bgcolor="#f1f1f1" py={5} css={{height: '100vh'}}>
      <Container>
        <Box display="flex" justifyContent="center">
          <Link href="/">
            <a>
              <Image width={200} height={100} src="/logo.svg" />
            </a>
          </Link>
        </Box>
        <Box py={5} maxWidth="720px" mx="auto" component={Paper}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}
