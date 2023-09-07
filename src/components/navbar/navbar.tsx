'use client';

import ShoppingIcon from '@/icons/shoppingIcon';
import { AppBar, Box, Button, List, ListItem, Toolbar, Typography } from '@mui/material';

function Navbar({ cart = true }) {
  const navItem = ['HOME', 'SHOP', 'FEATURES', 'CONTACT'];

  return (
    <AppBar className="px-16 py-8">
      <Toolbar>
        <Typography variant="h5" className="font-bold flex-grow pr-10 min-w-min">
          Faÿ
        </Typography>
        <Box className="flex-grow pl-10 max-w-lg">
          <List>
            {navItem.map((item) => (
              <ListItem disableGutters style={{ display: 'inline' }}>
                <Button key={item}>{item}</Button>
              </ListItem>
            ))}
          </List>
        </Box>
        <Button sx={{
          padding: '0px 50px'
        }}>
          <ShoppingIcon cart={cart} />
        </Button>
        <Button variant='contained'>LOGIN</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
