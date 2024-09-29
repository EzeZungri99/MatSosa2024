import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: black;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  max-width: 400px;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  max-width: 400px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #6a0572;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #f85f73;
  }
`;

const ContactForm: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <h2>Contact Me</h2>
        <Form>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <TextArea placeholder="Your Message" />
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
      <ImageContainer />
    </Container>
  );
};

export default ContactForm;