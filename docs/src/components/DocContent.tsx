/*
    This component is the body of a documentation page.
*/
import React from "react";
import { Card, ListGroup, Pagination, Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import "../styles/base.scss";
import "../styles/DocContent.scss";

type LinkList = { [index: string]: string };
type DocContentProps = React.PropsWithChildren<{
  links: LinkList;
  activeItem: string;
  className?: string;
}>;

function DocListGroup(props: DocContentProps) {
  return (
    <ListGroup variant="flush">
      {Object.entries(props.links).map(([title, link], index) => {
        return (
          <ListGroup.Item
            active={title === props.activeItem}
            action
            as={Link}
            to={link}
          >
            <span className="h5 font-weight-light">{`${index + 1}. ${title}`}</span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export function DocListPager(props: DocContentProps) {
  return (
    <Pagination>
      {Object.entries(props.links).map(([title, link], index) => {
        return (
          <Pagination.Item key={index + 1} as={Link} to={link} active={title===props.activeItem}>
            {index + 1}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
}

export function DocListCard(props: DocContentProps) {
  return (
    <Card
      className={`shadow-sm p-2 rounded-lg w-auto h-auto ${
        props.className ?? ""
      }`}
    >
      <DocListGroup links={props.links} activeItem={props.activeItem} />
    </Card>
  );
}

export function DocContent(props: DocContentProps) {
  return (
    <Container fluid className="p-3">
      <Row className="justify-content-center">
        <Col xs={12} lg={4} className="mb-3 mb-lg-0">
          <DocListCard links={props.links} activeItem={props.activeItem}/>
        </Col>
        <Col xs={12} lg={8}>
          <div className="min-vh-100">
            {props.children}
          </div>
        </Col>
      </Row>
    </Container>
  );
}