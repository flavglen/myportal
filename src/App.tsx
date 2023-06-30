import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
  },
  fontSizes: {
    xxs: '.5rem'
  }
})

const App: React.FC = () => {
  return (
    <ChakraProvider theme={{...theme}}>
        <RouterProvider router={router} />
    </ChakraProvider>
  )
};

export default App;