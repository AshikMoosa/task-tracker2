import { useState } from "react";
import { Field, Input, Checkbox, Button, Flex } from "@chakra-ui/react";

const TaskForm = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handleReminder = (e) => {
    setReminder(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name,
      day,
      reminder,
    };
    handleAdd(newTask);
    console.log(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="4" direction="column">
        <Field.Root>
          <Field.Label htmlFor="taskname">Task</Field.Label>
          <Input
            placeholder="Enter Task Name"
            minLength={5}
            id="taskname"
            value={name}
            onChange={handleName}
          />
          <Field.Label htmlFor="taskday">Day & Time</Field.Label>
          <Input
            placeholder="Enter Day & Time"
            minLength={5}
            id="taskday"
            value={day}
            onChange={handleDay}
          />
        </Field.Root>
        <Checkbox.Root onChange={handleReminder}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Set Reminder</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit">Save Task</Button>
      </Flex>
    </form>
  );
};

export default TaskForm;
