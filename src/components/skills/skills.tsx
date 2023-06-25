import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Progress,
  } from '@chakra-ui/react'
import { skillsData } from './skills.data';

const Skills: React.FC = () => {
    return (
        <TableContainer padding={'25px'}>
            <Table colorScheme='teal'>
                <TableCaption>Skills</TableCaption>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Years</Th>
                    <Th>Rating</Th>
                </Tr>
                </Thead>
                <Tbody>
                {
                    skillsData.map((skills, i) => 
                       <Tr key={'key-'+ i}>
                            <Td>{skills.skill}</Td>
                            <Td>{skills.years}</Td>
                            <Td><Progress value={(skills.rating * 100 / 10)} /></Td>
                        </Tr>
                    )
                }
                </Tbody>
            </Table>
            </TableContainer>
    )
}

export default Skills;