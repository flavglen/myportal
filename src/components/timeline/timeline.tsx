import React from 'react';
import { Heading, Text } from '@chakra-ui/react'
import { timelineData } from './timeline.data';
import './timeline.css';

const Timeline: React.FC = () => {
  return  (
    <div className="timeline">
      {
        timelineData.map((timeline, i) =>
          <div  key={'timeline'+ i} className={`mycontainer ${(i+1) % 2 === 0 ? 'right' : 'left'}`}>
            <div className="content">
              <Heading as='h2' className='company-heading'  size={{base:'sm', sm: 'sm', md: 'md', lg: 'md' }} noOfLines={1}>
                {timeline.role}
              </Heading>
              <Text fontSize={{base:'xs', sm:'xs'}} color="grey">{timeline.company} </Text> 
              <Text fontSize={{base:'xxs', sm:'xxs'}} color={'grey'}> 
                {`${timeline.location} - (${timeline.start} - ${timeline.end})`}
              </Text>
              <Text my={'10px'} fontSize='sm' >
                {timeline.description}
              </Text>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default Timeline;