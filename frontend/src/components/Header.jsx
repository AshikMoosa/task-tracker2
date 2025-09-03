import { Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { X } from "lucide-react";

const Header = ({ text }) => {
  return (
    <Flex justify="space-between">
      <Heading>{text}</Heading>
      <Button>Close</Button>
    </Flex>
  );
};

export default Header;
