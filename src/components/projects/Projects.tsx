import React from 'react';
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/layout';
import { ProjectCard } from '../common/project-card/ProjectCard';
import { projectData } from './Projects.data';
import { Checkbox } from '@chakra-ui/checkbox';

const Projects: React.FC = () => {

    return (
        <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Box p={5} shadow='md' borderWidth='1px'>
                <Stack spacing={5} direction='row'>
                    <Checkbox colorScheme='red' defaultChecked>
                        Personal
                    </Checkbox>
                    <Checkbox colorScheme='green' defaultChecked>
                        Professional
                    </Checkbox>
                </Stack>
                <Grid templateColumns='repeat(4, 250px)' templateRows='1fr' gap={6} my={3}>
                    {
                        projectData.map((data, index) => {
                            return (
                                <GridItem height={'auto'} bg='blue.500'>
                                    <ProjectCard key={index} />
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Flex>
    )
}

export default Projects;