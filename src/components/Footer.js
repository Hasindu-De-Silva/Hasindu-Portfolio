import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/hasindu-logo.png";
import { Linkedin, Github, EnvelopeFill } from 'react-bootstrap-icons';

export const Footer = () => {
  const linkedinUrl = "http://linkedin.com/in/hasindu777";
  const githubUrl = "http://github.com/Hasindu-De-Silva";
  const emailUrl = "mailto:hasindudinujaya2003@gmail.com";

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin color="white" /></a>
              <a href={githubUrl} target="_blank" rel="noreferrer"><Github color="white" /></a>
              <a href={emailUrl}><EnvelopeFill color="white" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
