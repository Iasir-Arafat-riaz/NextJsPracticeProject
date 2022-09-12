import Link from "next/link";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import compImage from "public/images/comImg.png";
import styles from "styles/Home.module.css";

const Header = () => {
  return (
    <>
      <Navbar
        className={styles.headerNavigation}
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container fluid>
          <Link href="/">
            <Image width="50px" height="50px" src={compImage}></Image>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link href="/about">ABOUT VMSL</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/recentStories">RECENT STORIES</Link>
              <Link href="/career">CAREER</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/docs">DOCS</Link>
              <Link href="/dashboard">DASHBOARD</Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
