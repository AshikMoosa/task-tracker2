import { useState, useEffect } from "react";
import { Field, Input, Checkbox, Button, Flex } from "@chakra-ui/react";

const TaskForm = ({ handleAdd, handleUpdateData, taskToUpdate }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    if (taskToUpdate) {
      setName(taskToUpdate.name);
      setDay(taskToUpdate.day);
      setReminder(taskToUpdate.reminder);
    } else {
      // Clear the form if no task is being updated
      setName("");
      setDay("");
      setReminder(false);
    }
  }, [taskToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !day) {
      alert("Please fill out all fields!");
      return;
    }

    if (taskToUpdate) {
      const updatedTask = { ...taskToUpdate, name, day, reminder };
      handleUpdateData(updatedTask);
    } else {
      const newTask = { name, day, reminder };
      handleAdd(newTask);
    }

    // Reset the form fields after submission
    setName("");
    setDay("");
    setReminder(false);
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
            onChange={(e) => setName(e.target.value)}
          />
          <Field.Label htmlFor="taskday">Day & Time</Field.Label>
          <Input
            placeholder="Enter Day & Time"
            minLength={5}
            id="taskday"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </Field.Root>
        <Checkbox.Root onChange={(e) => setReminder(e.target.checked)}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Set Reminder</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit">
          {taskToUpdate ? "Update Task" : "Save Task"}
        </Button>
      </Flex>
    </form>
  );
};

export default TaskForm;
