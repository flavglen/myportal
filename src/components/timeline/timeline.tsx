import React from 'react';
import { Heading, Text } from '@chakra-ui/react'
import './timeline.css';

const Timeline: React.FC = () => {
  return  (
    <div className="timeline">
      <div className="mycontainer left">
        <div className="content">
          <Heading as='h2' className='company-heading'  size='md' noOfLines={1}>
            Loblaws Digital  - Senior Web Developer
          </Heading>
          <Text fontSize='xs' fontWeight={600} color={'grey'} marginBottom={'25px'}>Toronto, Canada (2021 - Current)</Text>
          <Text as='i' fontSize='sm' >
            As a seasoned senior web developer, I specialize in building dynamic web applications using modern technologies such as React, 
            Redux, the Context API, and TypeScript. With expertise in microfrontends,
            Angular, Node.js, and CI/CD, I excel in creating modular and scalable solutions. 
            Collaborating with cross-functional teams, I consistently deliver exceptional results that exceed client expectations. 
            Passionate about crafting seamless user experiences, I stay at the forefront of industry trends and leverage 
            TypeScript for clean and type-safe code. By implementing robust CI/CD pipelines, I ensure efficient and reliable
            deployment, enabling continuous integration of code changes. Let's collaborate to create remarkable web applications that leave a lasting impression.
          </Text>
        </div>
      </div>
      <div className="mycontainer right">
        <div className="content">
          <Heading as='h2' className='company-heading'  size='md' noOfLines={1}>
           Hartford Insurance (Infosys)  - Senior Web Developer 
          </Heading>
          <Text fontSize='xs' fontWeight={600} color={'grey'} marginBottom={'25px'}>Toronto, Canada (2019 - 2021)</Text>
          <Text as='i' fontSize='sm'>
           With a diverse skill set that encompassed Angular, Material UI, Jest, Vue Js, JQuery, NET, Python, I excelled in delivering top-notch web applications.
            I crafted sleek interfaces and conducted rigorous testing to create immersive user experiences. 
            Leveraging the power of cloud services and cutting-edge technologies, I ensured scalability and optimal performance. Together, 
            we built remarkable web solutions that exceeded expectations.
          </Text>
        </div>
      </div>
      <div className="mycontainer left">
        <div className="content">
          <Heading as='h2' className='company-heading'  size='md' noOfLines={1}>
            Infosys Limited  - Technology Analyst
          </Heading>
          <Text fontSize='xs' fontWeight={600} color={'grey'} marginBottom={'25px'}>Mangalore , India (2021 - Current) </Text>
          <Text as='i' fontSize='sm'>
            With expertise in Angular, Material UI, Cypress, Jest, PHP, SQL, .NET, jQuery, and TypeScript, 
            I delivered exceptional web applications with seamless interfaces and rigorous testing. 
            I leveraged innovative technologies and cloud services to ensure scalability and peak performance. Throughout my career, 
            I collaborated with clients to bring their web visions to life, consistently exceeding expectations and delivering remarkable results.
          </Text>
        </div>
      </div>
      <div className="mycontainer right">
        <div className="content">
          <Heading as='h2' className='company-heading'  size='md' noOfLines={1}>
            Bolas Intelli Solutions  - Web Developer 
          </Heading>
          <Text fontSize='xs' fontWeight={600} color={'grey'} marginBottom={'25px'}>Mangalore , India (2014 - 2017) </Text>
          <Text as='i' fontSize='sm'>
            With expertise in AngularJS, Bootstrap, CSS, HTML, PHP, and Laravel, I built a successful career in web development. 
            I created dynamic web applications using AngularJS and crafted visually appealing designs with Bootstrap and CSS, honing my skills in delivering exceptional
            user experiences. I developed robust and scalable web solutions using Angular js, JQuery, SQL, HTML, and PHP. Throughout my career, 
            I exceeded client expectations and delivered outstanding results, driven by my passion for web development
          </Text>
        </div>
      </div>
    </div>
  )
};

export default Timeline;