import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import Home from './components/home/Home';
import Timeline from './components/timeline/timeline';
import { Layout } from './components/common/layout/Layout';
import Projects from './components/projects/Projects';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: '/timeline',
        element: <Timeline />
      },
      {
        path: '/projects',
        element: <Projects />
      }
    ],
  },
]);

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
  }
})

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
    </ChakraProvider>
  )
};

export default App;