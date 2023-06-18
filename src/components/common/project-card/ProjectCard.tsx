import React from 'react';
import { Avatar, AvatarBadge} from "@chakra-ui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { InfoIcon } from '@chakra-ui/icons'
import './ProjectCard.css';

export const ProjectCard: React.FC<{data: any}> = (props) => {
    const { name, start, end, description, personal } = props.data;
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                      <Avatar bg='teal.500' icon={<InfoIcon fontSize='1.5rem' />}>
                       <AvatarBadge borderColor='papayawhip' bg={!personal ? 'green.500' : 'tomato'} boxSize='1.25em' />
                      </Avatar>

                        <Box>
                            <Heading size='sm'>{name}</Heading>
                            <Text>{start} - {end} </Text>
                        </Box>
                    </Flex>
                    {/* <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    /> */}
                </Flex>
            </CardHeader>
            <CardBody>
                <Text className='clap-3-line' title={description}>
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
                {/* <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button> */}
            </CardFooter>
        </Card>
    )
}