import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/hasindu-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const githubUrl = "http://github.com/Hasindu-De-Silva";
  const linkedinUrl = "http://linkedin.com/in/hasindu777";
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
              <a href={githubUrl} target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href={emailUrl}><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
