import React from 'react';
import { Avatar, AvatarBadge} from "@chakra-ui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { InfoIcon } from '@chakra-ui/icons'
import './ProjectCard.css';
import { Button } from '@chakra-ui/react';

export const ProjectCard: React.FC<{data: any, setLoadMoreData: Function}> = (props) => {
    const { name, start, end, description, personal } = props.data;
    const { setLoadMoreData } = props;
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                      <Avatar bg='red.800' icon={<InfoIcon fontSize='1rem' />}>
                       <AvatarBadge borderColor='papayawhip' bg={!personal ? 'green.500' : 'tomato'} boxSize='1rem' />
                      </Avatar>
                        <Box>
                            <Heading fontSize="xs">{name}</Heading>
                            <Text fontSize="xxs">{start} - {end} </Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text fontSize="xs" className='clap-3-line' title={description}>
                    {description}
                </Text>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                  <Button bg='red.800' color={'white'} size='xs' onClick={() => setLoadMoreData(props.data) }>
                     Show More...
                  </Button>
            </CardFooter>
        </Card>
    )
}