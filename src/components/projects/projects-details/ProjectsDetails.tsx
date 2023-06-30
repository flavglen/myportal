import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
    VStack,
    StackDivider,
    Tag,
} from '@chakra-ui/react'

interface ProjectsDetailsProps {
    data: any;
    setLoadMoreData: Function;
}

const ProjectsDetails: React.FC<ProjectsDetailsProps> = ({ data, setLoadMoreData }) => {
    const { description, skills } = data;

    const onClose = () => {
        setLoadMoreData(null)
    }

    return (
        <Modal isOpen={!!data} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{data.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box>
                            <Text fontSize="1rem" title={description}>
                                {description}
                            </Text>
                        </Box>
                        <Box>
                             <Text fontSize="1rem" title={description}>
                                Skills: 
                            </Text>
                            {
                                skills?.map((skill) => <Tag margin={'10px'}>{skill}</Tag> )
                            }
                            
                        </Box>
                    </VStack>

                </ModalBody>

                <ModalFooter>
                    <Button size='xs' bg='red.800' color={'white'} mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ProjectsDetails;