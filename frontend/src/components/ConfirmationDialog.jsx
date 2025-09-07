"use client";
import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";

const ConfirmationDialog = ({
  isOpen,
  onCancel,
  onConfirm,
  headerText,
  bodyText,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onCancel}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{headerText}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text>{bodyText}</Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button onClick={onConfirm}>Delete</Button>
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
