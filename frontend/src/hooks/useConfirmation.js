import { useState, useCallback } from "react";

export function useConfirmation() {
  const [promise, setPromise] = useState(null);

  const prompt = useCallback(() => {
    return new Promise((resolve, reject) => {
      setPromise({ resolve, reject });
    });
  }, []);

  const handleConfirm = useCallback(() => {
    if (promise) {
      promise.resolve(true);
      setPromise(null);
    }
  }, [promise]);

  const handleCancel = useCallback(() => {
    if (promise) {
      promise.reject(false);
      setPromise(null);
    }
  }, [promise]);

  const isOpen = promise !== null;

  return {
    prompt,
    isOpen,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
  };
}
