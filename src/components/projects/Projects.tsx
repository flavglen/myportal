import React, { useState, useRef } from 'react';
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/layout';
import { ProjectCard } from '../common/project-card/ProjectCard';
import { projectData } from './Projects.data';
import { Checkbox } from '@chakra-ui/checkbox';

const Projects: React.FC = () => {
    const projectDataClone = JSON.parse(JSON.stringify(projectData));
    const [projectGrid, setProjectGrid] = useState(projectData);

    //ref
    const checkboxPersonal = useRef<HTMLInputElement>(null);
    const checkboxPro = useRef<HTMLInputElement>(null);

    const filterProjects = () => {
        let filtered = [];
        if(checkboxPersonal?.current?.checked  && !checkboxPro?.current?.checked){
            filtered = projectDataClone.filter(data => data.personal );
        } else if(!checkboxPersonal?.current?.checked  && checkboxPro?.current?.checked) {
            filtered = projectDataClone.filter(data => !data.personal );
        } else {
            filtered = projectDataClone;
        }
       setProjectGrid(filtered);
    }

    return (
        <Flex  justifyContent={'center'} alignItems={'center'} my={20}>
            <Box p={5} shadow='md' borderWidth='1px'>
                <Stack spacing={5} direction='row'>
                    <Checkbox  ref={checkboxPro} colorScheme={'green'} value={1} defaultChecked onChange={filterProjects}>
                        Professional
                    </Checkbox>
                    <Checkbox  ref={checkboxPersonal} colorScheme={'orange'} value={0} defaultChecked onChange={filterProjects}>
                        Personal
                    </Checkbox>
                </Stack>
                <Grid templateColumns={{
                        base: "repeat(1, 1fr)",
                        lg: "repeat(3, 1fr)",
                        md: "repeat(3, 1fr)"
                    }}
                    rowGap={10}
                    columnGap={20}
                    my={3}>
                    {
                        projectGrid.map((data, index) => {
                            return (
                                <GridItem my={30} height={'250px'}>
                                    <ProjectCard key={index} data={data}/>
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