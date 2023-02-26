import React, { ReactNode, RefObject } from 'react';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import { FocusableElement } from '@chakra-ui/utils';
import Sidebar from '../sidebar/sidebar';

interface props {
    isOpen: boolean,
    onClose: () => void
}

export type Ref = RefObject<FocusableElement> | undefined;

const SideMenu = React.forwardRef <Ref, props>(({ isOpen, onClose }, ref: any  ) => {
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={ref}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar menuClicked={onClose}/>
                </DrawerContent>
            </Drawer>
        </>
    )
})

export default SideMenu;
