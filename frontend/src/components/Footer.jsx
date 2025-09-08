import { Heading, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router";

const Footer = () => {
  let currentLocation = useLocation();
  return (
    <footer>
      <Flex direction="column" align="center">
        <Heading size="sm">Copyright &copy; 2025</Heading>
        <Heading size="sm">Created By Ashik Moosa</Heading>
        <Heading size="sm">
          {currentLocation.pathname === "/about" ? (
            <Link to="/">Home</Link>
          ) : (
            <Link to="/about">About</Link>
          )}
        </Heading>
      </Flex>
    </footer>
  );
};

export default Footer;
