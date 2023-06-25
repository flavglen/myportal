import React from 'react';
import { Card, Heading, CardBody, CardFooter, Stack, Image, Text, Button, Highlight, Divider } from '@chakra-ui/react'
import { Center, Flex } from '@chakra-ui/react'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: React.FC = () => {
    return (
        <Flex color='white' alignContent="center" padding={'10px'}  flexDirection={{ base: 'column', sm: 'column' , md: 'row' }}>
            <Center  mx="3" marginBottom={'20px'}  order={{ base: 2, sm: 1, md: 1 }}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <Stack>
                        <CardBody>
                            <Heading size='xl' color={'tomato'}> Glen Flavian Pais </Heading>
                            <Divider size={'sm'} bg="red" color={'red'} mb="2" mt="2"/>
                            <Stack direction='row'>
                                <Text py='2' lineHeight={6}>
                                    <Highlight
                                        query={['Angular', 'Javascript', 'Typescript', 'React', 'Vue js', 'Node Js']}
                                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                                    >
                                        Hello, I'm &lt;Glen / &gt;, a frontend and node developer with a passion for crafting beautiful and responsive web interfaces. I've spent 9+ working on a variety of web projects,
                                        from single-page applications to complex e-commerce websites. I specialize in Angular, React, Typescript, Vue Js, Node js, HTML, CSS .
                                        I'm always looking for new ways to improve my coding skills and stay up-to-date with the latest web development trends.
                                    </Highlight>
                                </Text>
                            </Stack>

                            <Text>
                                When I'm not coding, you can usually find me behind a <FontAwesomeIcon color='tomato' icon={faCamera} size="1x" title='Camera' /> lens, capturing the world around me through photography. As an avid photographer, I love to explore new locations and experiment with different techniques to create stunning images that tell a story !!
                                Whether I'm working on a complex web project or capturing a beautiful sunset, I always bring a creative and detail-oriented approach to my work.
                            </Text>

                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                Resume
                            </Button>
                            <Button mx='3' variant='solid' colorScheme='blue'>
                                Gallery
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Center>
            <Center padding={'10px'} order={{ base: 1, sm: 2, md: 2 }} >
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <Image
                        objectFit='cover'
                        maxW={{ base: '150px', sm: '200px', md:'250px' }}
                        src={process.env.PUBLIC_URL + '/images/PXL_dp.jpg'}
                        alt='Glen F Pais'
                    />

                </Card>
            </Center>
        </Flex>
    )
}

export default Home;