import React, { RefObject } from 'react';
import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';
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
                <DrawerOverlay/>
                <DrawerContent background={'none'} boxShadow={'none'}>
                    <Sidebar menuClicked={onClose}/>
                </DrawerContent>
            </Drawer>
        </>
    )
})

export default SideMenu;
