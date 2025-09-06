import { Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { X } from "lucide-react";

const Header = ({ headingText, buttonText, onToggleForm, showForm }) => {
  const handleClick = () => {
    console.log("button clicked!!");
  };

  return (
    <Flex justify="space-between">
      <Heading>{headingText}</Heading>
      <Button onClick={handleClick} colorPalette={showForm ? "red" : "gray"}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default Header;
