import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kamal Bhattarai </span>
            from <span className="purple"> Beni,Myagdi,Nepal.</span>
            <br /> I am a Front-End Web Developer / Web Designer.
            <br />
            Additionally, I am currently employed as a Front-End Web Developer at
            Satyal E-Learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Researching
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "DO SOMETHING TO EITHER LEARN OR EARN!"{" "}
          </p>
          <footer className="blockquote-footer">Kamal Bhattarai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
