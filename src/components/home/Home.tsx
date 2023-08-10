import React from 'react';
import { 
    Card, 
    Heading, 
    CardBody, 
    CardFooter, 
    Stack, 
    Image, 
    Text, 
    Button, 
    Highlight, 
    Divider, 
    Link 
} from '@chakra-ui/react';
import { Center, Flex } from '@chakra-ui/react'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: React.FC = () => {
    return (
        <Flex color='white' alignContent="center" p={'10px'} flexDirection={{ base: 'column', sm: 'column' , md: 'row' }}>
            <Center mx="3" mb={'20px'}  order={{ base: 2, sm: 1, md: 1 }}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    mb={8}
                >
                    <Stack>
                        <CardBody>
                            <Heading size='lg' color={'red.800'}> &lt; Glen Flavian Pais / &gt; </Heading>
                            <Divider size={'sm'} bg="red" color={'red'} mb="2" mt="2"/>
                            <Stack direction='row'>
                                <Text py='2' lineHeight={6} fontSize="sm">
                                    <Highlight
                                        query={['Angular', 'Javascript', 'Typescript', 'React', 'Vue js', 'Node Js']}
                                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                                    >
                                        Hello, I'm Glen,  A frontend and node developer with a passion for crafting beautiful and responsive web interfaces. I've spent 9+ working on a variety of web projects,
                                        from single-page applications to complex e-commerce websites. I specialize in Angular, React, Typescript, Vue Js, Node js, HTML, CSS, Next Js .
                                        I'm always looking for new ways to improve my coding skills and stay up-to-date with the latest web development trends.
                                        Additionally, I have expertise in serverless architecture and cloud computing,
                                         leveraging the power of AWS to build scalable and reliable web applications
                                    </Highlight>
                                </Text>
                            </Stack>

                            <Text fontSize="sm">
                                When I'm not coding, you can usually find me behind a <FontAwesomeIcon color='#822727' icon={faCamera} size="1x" title='Camera' /> lens, 
                                capturing the world around me through photography. As an avid photographer, I love to explore new locations and experiment with different techniques to create stunning images that tell a story !!
                                Whether I'm working on a complex web project or capturing a beautiful sunset, I always bring a creative and detail-oriented approach to my work.
                            </Text>

                            
                            <Text py='2' fontSize="sm">
                                I love to unwind and have fun by playing games on my PlayStation 4 (PS4).
                                Some of my favorite games include epic multiplayer battles in 'Battlefield,' intense and action-packed missions in 'Call of Duty,'
                                diving into the dark and gritty world of 'Max Payne,' and immersing myself in the thrilling adventures of 'Batman.
                            </Text>

                        </CardBody>

                        <CardFooter>
                            <Button mb={2} variant='solid'color={'white'} size="sm" bg='red.800'>
                                <Link isExternal  href="https://github.com/flavglen/resume/blob/main/UI-Fronend%20Developer-Glen%20Flavian-v2.pdf"> Download Resume </Link>
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