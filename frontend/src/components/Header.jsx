import { Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { X } from "lucide-react";

const Header = (props) => {
  return (
    <Flex justify="space-between">
      <Heading>{props.text}</Heading>
      <Button>Close</Button>
    </Flex>
  );
};

export default Header;
