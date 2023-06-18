import { Avatar, Badge, Box, Divider, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faTimeline, faCode } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faFacebook, faInstagram, faFlickr } from '@fortawesome/free-brands-svg-icons';
import './sidebar.css';

interface props {
  menuClicked?: () => void
}

const Sidebar: React.FC<props> = ({ menuClicked }) => {

  const closeMenu = () => {
    menuClicked && menuClicked();
  }

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
      <Flex mb={10}>
        <Avatar size={'lg'} src={process.env.PUBLIC_URL + '/images/PXL_dp.jpg'} />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Glen F Pais
            <Badge ml='1' colorScheme='green'>
              UI
            </Badge>
          </Text>
          <Text fontSize='sm'>Senior Frontend Developer</Text>
        </Box>
      </Flex>

      <Flex mb={10}>
        <Box ml='3'>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Box>
        <Box ml='3'>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Box>
        <Box ml='3'>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Box>
        <Box ml='3'>
          <FontAwesomeIcon icon={faFlickr} size="2x" />
        </Box>
      </Flex>

      <Divider orientation='horizontal' mb={3} />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item active">
          <Link onClick={closeMenu} to='home'>
            <>
              <FontAwesomeIcon icon={faHome} className="test" />
              <span className="custom-icon"> Home </span>
            </>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={closeMenu} to='timeline'>
            <>
              <FontAwesomeIcon icon={faTimeline} className="test" />
              <span className="custom-icon"> Timeline </span>
            </>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={closeMenu} to='projects'>
            <>
              <FontAwesomeIcon icon={faBuilding} className="test" />
              <span className="custom-icon"> Projects </span>
            </>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={closeMenu} to='timeline'>
            <>
              <FontAwesomeIcon icon={faCode} className="test" />
              <span className="custom-icon"> Skills </span>
            </>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link onClick={closeMenu} to='timeline'>
            <>
              <FontAwesomeIcon icon={faCode} className="test" />
              <span className="custom-icon"> Gallery </span>
            </>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={closeMenu} to='timeline'>
            <>
              <FontAwesomeIcon icon={faCode} className="test" />
              <span className="custom-icon"> Contact </span>
            </>
          </Link>
        </li> */}
      </ul>
      <hr />
    </div>
  )
};

export default Sidebar;