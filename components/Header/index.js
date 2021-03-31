import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';
import {useState} from 'react';
import NavbarLink from './NavbarLink';
import {useRouter} from 'next/router';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);

  const redirectTo = (path) => {
    router.push(path);
    setShowDrawer(false);
  };

  return (
    <header>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setShowDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box mr={2}>
            <Link href="/">
              <a>
                <Image width="100" height="30" src="/logo.svg" />
              </a>
            </Link>
          </Box>
          <Box mx="auto">
            <Hidden smDown>
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/contact">Contact</NavbarLink>
            </Hidden>
          </Box>
          <Box display="flex">
            <Box mr={1}>
              <Link href="/sign-in">
                <Button component="a" variant="text" color="primary">
                  Sign In
                </Button>
              </Link>
            </Box>
            <Link href="/sign-up">
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}>
        <List>
          <ListItem button onClick={() => redirectTo('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => redirectTo('/contact')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Link href="/sign-in">
              <Button
                variant="outlined"
                component="a"
                fullWidth
                color="primary">
                Sign in
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/sign-up">
              <Button
                variant="contained"
                component="a"
                fullWidth
                color="primary">
                Create an account
              </Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}
