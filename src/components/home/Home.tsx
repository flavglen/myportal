import React from 'react';
import { Card, Heading, CardBody, CardFooter, Stack, Image, Text, Button, Box } from '@chakra-ui/react'
import { Center, Flex } from '@chakra-ui/react'

const Home: React.FC = () => {
    return (
        <Flex color='white' alignContent="center"  height="40em">
            <Center flex='3' mx="3">
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <Stack>
                        <CardBody>
                            <Heading size='md'>Glen Flavian Pais</Heading>

                            <Text py='2'>
                                <p>Hello, I'm Glen, a frontent and node developer with a passion for crafting beautiful and responsive web interfaces. I've spent 9+ working on a variety of web projects, from single-page applications to complex e-commerce websites. </p>

                                <p>I specialize in React, Angular, vue and I have a deep understanding of HTML, CSS, JavaScript, and Redux, Rxjs, NgRx
                                I'm always looking for new ways to improve my coding skills and stay up-to-date with the latest web development trends. </p>
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                Buy Latte
                            </Button>
                            <Button mx='3' variant='solid' colorScheme='blue'>
                                Buy Latte
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Center>
            <Center flex='1'>
            <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />

                </Card>
            </Center>
        </Flex>
    )
}

export default Home;