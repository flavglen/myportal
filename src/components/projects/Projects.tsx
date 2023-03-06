import React from 'react';
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/layout';
import { ProjectCard } from '../common/project-card/ProjectCard';
import { projectData } from './Projects.data';
import { Checkbox } from '@chakra-ui/checkbox';

const Projects: React.FC = () => {

    return (
        <Flex  justifyContent={'center'} alignItems={'center'} my={20}>
            <Box p={5} shadow='md' borderWidth='1px'>
                <Stack spacing={5} direction='row'>
                    <Checkbox colorScheme='red' defaultChecked>
                        Personal
                    </Checkbox>
                    <Checkbox colorScheme='green' defaultChecked>
                        Professional
                    </Checkbox>
                </Stack>
                <Grid templateColumns={{
                        base: "repeat(1, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    rowGap={10}
                    columnGap={20}
                    my={3}>
                    {
                        projectData.map((data, index) => {
                            return (
                                <GridItem my={30} height={'250px'}>
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