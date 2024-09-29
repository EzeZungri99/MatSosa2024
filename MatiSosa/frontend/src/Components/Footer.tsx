import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const SocialLinks = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.5em;
  transition: color 0.3s ease;

  &:hover {
    color: #6a0572;
  }
`;

const Copyright = styled.p`
  margin: 10px 0 0;
  font-size: 0.9em;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        {/* <SocialLink href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFiverr} />
        </SocialLink> */}
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;