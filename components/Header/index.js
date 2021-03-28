import {
  AppBar,
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
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import getConfig from 'next/config';
import Link from 'next/link';
import {useState} from 'react';
import NavbarLink, {LinksContainer} from './NavbarLink';
import {useRouter} from 'next/router';

const {
  publicRuntimeConfig: {app_name},
} = getConfig();

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
          <Link href="/">
            <a>
              <Typography variant="h6" color="primary">
                {app_name}
              </Typography>
            </a>
          </Link>
          <LinksContainer>
            <div>
              <Hidden smDown>
                <NavbarLink href="/">Home</NavbarLink>
                <NavbarLink href="/about">About us</NavbarLink>
              </Hidden>
            </div>
            <div>
              <Button variant="text" color="primary">
                Sign In
              </Button>
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </LinksContainer>
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
          <ListItem button onClick={() => redirectTo('/about')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Button variant="outlined" fullWidth color="primary">
              Sign in
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth color="primary">
              Create an account
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}
