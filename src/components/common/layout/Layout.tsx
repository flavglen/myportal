import React from 'react';
import { Button, Grid, GridItem, Text, useDisclosure } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
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
                    md: '"topnav" "main" "footer"',
                    sm: '"topnav" "main" "footer"',
                }}
                gridTemplateRows={{
                    base: "50px auto 30px",
                    lg: '100vh auto 30px',
                    md: "50px auto 30px",
                }}
                gridTemplateColumns={{
                    base: '5fr',
                    lg: '280px 11fr',
                    md: '5fr',
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
                        md: 'block'
                    }
                }>
                    <Button marginTop={'5px'} ref={btnRef} onClick={onOpen} colorScheme='teal'>
                        <HamburgerIcon  />
                    </Button>
                </GridItem>

                <GridItem area={'nav'} display={
                    {
                        base: 'none',
                        lg: 'block',
                        md: ' none'
                    }
                }>
                    <Sidebar />
                </GridItem>

                <GridItem pl='2' area={'main'}>
                    <Outlet />
                </GridItem>

                <GridItem pl='2' bg='red.800' w={'100%'} h={'50px'} area={'footer'} position={'fixed'} zIndex={9999} bottom={0}>
                    <Text fontSize='14px' color='white' textAlign={'center'} paddingTop="15px">
                         (c) Glen Flavian Pais  - 2023
                    </Text>
                </GridItem>
            </Grid>

            <SideMenu ref={btnRef} isOpen={isOpen} onClose={onClose} />
        </>
    )
}
