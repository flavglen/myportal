import React from 'react';
import { Center, ChakraProvider, Flex, Grid, GridItem } from '@chakra-ui/react'
import {
  createBrowserRouter, Link,RouterProvider
} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"nav main"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'100vh 1fr 30px'}
        gridTemplateColumns={'280px 11fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          <Sidebar />
        </GridItem>
        <GridItem pl='2' area={'main'}>
          <RouterProvider router={router} />
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
};

export default App;