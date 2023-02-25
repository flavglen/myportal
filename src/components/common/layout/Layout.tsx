import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

export const Layout: React.FC = () => {
    return (
        <Grid
            templateAreas={`"nav main" "nav main" "nav footer"`}
            gridTemplateRows={'100vh auto 30px'}
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
                <Outlet />
            </GridItem>
            
            <GridItem pl='2' bg='black' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    )
}
