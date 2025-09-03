import { Field, Input, Checkbox, Button, Flex } from "@chakra-ui/react";

const AddTask = () => {
  return (
    <form>
      <Flex gap="4" direction="column">
        <Field.Root>
          <Field.Label>Task</Field.Label>
          <Input placeholder="Enter Task Name" />
          <Field.Label>Day & Time</Field.Label>
          <Input placeholder="Enter Day & Time" />
        </Field.Root>
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
