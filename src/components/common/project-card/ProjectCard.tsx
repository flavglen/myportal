import React from 'react';
import { Avatar, AvatarBadge} from "@chakra-ui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { InfoIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './ProjectCard.css';

export const ProjectCard: React.FC<{data: any, setLoadMoreData: Function}> = (props) => {
    const { name, start, end, description, personal, git, company } = props.data;
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
                            <Heading fontSize="sm">{name}</Heading>
                            <Text fontSize="xs">{start} - {end} </Text>
                            <Text fontSize="xs">Company : {company} </Text>
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
                justifyContent={'space-between'}
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                  <Link bg='red.800' background={'none'} fontSize="12px" color={'#822727'}  onClick={() => setLoadMoreData(props.data) }>
                     Read More...
                  </Link>

                  { git && 
                    <Link bg='red.800' href={git} target={'_blank'} background={'none'}>
                        <FontAwesomeIcon color='#822727' icon={faGithub} size="1x" title='Camera' />
                    </Link>
                 }
            </CardFooter>
        </Card>
    )
}