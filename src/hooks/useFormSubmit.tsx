import { startTransition, FormEvent } from 'react';

type FormAction = (formData: FormData) => void;
type NotifyFunction = (() => void) | null;

export const useFormSubmit = (action: FormAction, notifyFn?: NotifyFunction) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (notifyFn) {
      notifyFn();
    }

    startTransition(() => {
      action(new FormData(e.currentTarget));
    });
  };

  return { onSubmit };
};
