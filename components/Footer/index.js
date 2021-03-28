import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MaterialLink,
} from '@material-ui/core';
import NextLink from 'next/link';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: {app_name},
} = getConfig();

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Container>
          <Typography variant="body1" color="inherit" align="center">
            © {new Date().getFullYear()}{' '}
            <NextLink href="/">
              <MaterialLink color="inherit">{app_name}</MaterialLink>
            </NextLink>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
