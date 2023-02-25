import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import Home from './components/home/Home';
import Timeline from './components/timeline/timeline';
import { Layout } from './components/common/Layout';

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
        path: '/bar',
        element: <div>foo</div>,
      }
    ],
  },
]);


const App: React.FC = () => {
  return (
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  )
};

export default App;