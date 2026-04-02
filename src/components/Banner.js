import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.jpg";  // 👈 rename your photo to profile.jpg
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const TO_ROTATE = ["Web Developer", "cyber security Undergraduate"];
const ROTATE_PERIOD = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
    const i = loopNum % TO_ROTATE.length;
    const fullText = TO_ROTATE[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    } else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(ROTATE_PERIOD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }, [isDeleting, loopNum, text]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Hasindu Dinujaya | Portfolio</span>
                <h1>
                  {`Hi! I'm Hasindu Dinujaya`}
                  {' '}
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "cyber security Undergraduate" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                  <p>
                    I'm an undergraduate in cyber security and a web developer. I build responsive web
                    apps with HTML, CSS, React, JavaScript and Java, backed by solid MySQL database design.
                  </p>
                  <button onClick={() => { window.location.hash = "connect"; }}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={headerImg}
                    alt="Hasindu Dinujaya"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "400px",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: "50%",
                      border: "4px solid rgba(255, 255, 255, 0.2)",
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}