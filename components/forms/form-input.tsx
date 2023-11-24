'use client';

import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';

interface IFormInput {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  description?: string;
  value?: string | number | null;
  disabled?: boolean;
}

const FormInput: React.FC<IFormInput> = ({
  name,
  label,
  type = 'text',
  placeholder,
  description,
  value,
  disabled,
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={value}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
