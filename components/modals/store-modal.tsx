'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import Modal from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import FormInput from '../forms/form-input';
import { Button } from '../ui/button';

const formSchema = z.object({
  store: z.string().min(2, {
    message: 'Store name must be at least 2 characters.',
  }),
});

function StoreModal() {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      store: '',
    },
  });

  const handleSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log({ value });
  };

  return (
    <Modal
      title="New Store"
      description="Add a new store to manage your products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div className="flex flex-col space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormInput
              name="store"
              label="Enter name of store"
              placeholder="Store name"
            />

            <div className="pt-4 space-x-2 flex justify-end">
              <Button onClick={storeModal.onClose} variant="outline">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
}

export default StoreModal;
