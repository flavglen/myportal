import React from 'react';
import { Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import SideMenu from '../slidemenu/Sidemenu';

export const Layout: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef: any = React.useRef();

    return (

        <>
            <Grid
                templateAreas={{
                    base: '"topnav" "main" "footer"',
                    lg: '"nav main" "nav main" "nav footer"',
                    md: '"nav main" "nav main" "nav footer"',
                }}
                gridTemplateRows={{
                    base: "50px auto 30px",
                    lg: '100vh auto 30px',
                    md: '100vh auto 30px',
                }}
                gridTemplateColumns={{
                    base: '1fr',
                    lg: '280px 11fr',
                    md: '280px 11fr',
                }}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='red.800' area={'topnav'} display={
                    {
                        base: 'block',
                        lg: 'none',
                        md: 'none'
                    }
                }>
                    <Button ref={btnRef} onClick={onOpen} colorScheme='teal'>
                        Open
                    </Button>
                </GridItem>

                <GridItem pl='2' bg='pink.300' area={'nav'} display={
                    {
                        base: 'none',
                        lg: 'block',
                        md: ' block'
                    }
                }>
                    <Sidebar />
                </GridItem>

                <GridItem pl='2' area={'main'}>
                    <Outlet />
                </GridItem>

                <GridItem pl='2' bg='black' w={'100%'} area={'footer'} position={'fixed'} bottom={0}>
                    Footer
                </GridItem>
            </Grid>

            <SideMenu ref={btnRef} isOpen={isOpen} onClose={onClose} />
        </>
    )
}
