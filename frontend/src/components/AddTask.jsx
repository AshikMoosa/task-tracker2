import { Input, Checkbox, Button, Flex } from "@chakra-ui/react";

const AddTask = () => {
  return (
    <form>
      <Flex gap="4" direction="column">
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your email" />
        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Set Reminder</Checkbox.Label>
        </Checkbox.Root>
        <Button>Save Task</Button>
      </Flex>
    </form>
  );
};

export default AddTask;
