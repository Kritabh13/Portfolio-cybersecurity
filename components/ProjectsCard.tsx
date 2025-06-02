import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, linkedin }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>

              {/* GitHub Button */}
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}

              {/* LinkedIn Button */}
              {linkedin ? (
                <Button
                  className="btn-icon ml-2"
                  color="primary"
                  href={linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
              ) : null}

              {/* Optional Demo Link Button */}
              {link ? (
                <Button
                  className="btn-icon ml-2"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Demo"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
