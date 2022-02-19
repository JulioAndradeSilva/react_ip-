import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import editing from 'assets/img/icons/spot-illustrations/21.png';
import SoftBadge from 'components/common/SoftBadge';

const ComingSoon = () => {
  return (
    <Card>
      <Card.Body className="overflow-hidden p-lg-6">
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <img src={editing} className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-start">
            <SoftBadge pill bg="success" className="me-2">
              Coming soon
            </SoftBadge>
            <h3 className="mt-1">We are working on this page</h3>
            <p>
              We are continuously working to bring all the pages from{' '}
              <a href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/">
                <strong>Falcon Html</strong>
              </a>{' '}
              to here. Stay tuned!
            </p>
            <Button
              variant="falcon-primary"
              as={Link}
              to="/documentation/getting-started"
            >
              Getting started
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ComingSoon;
