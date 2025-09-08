"use client";
import { useContext } from "react";
import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";
import TaskContext from "../context/TaskContext.jsx";

const ConfirmationDialog = () => {
  const { isAlertOpen, handleCancelDelete, handleConfirmDelete } =
    useContext(TaskContext);

  return (
    <Dialog.Root open={isAlertOpen} onOpenChange={handleCancelDelete}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete Task</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text>
                Are you sure you want to delete this task? This action cannot be
                undone.
              </Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={handleCancelDelete}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button onClick={handleConfirmDelete}>Delete</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ConfirmationDialog;
