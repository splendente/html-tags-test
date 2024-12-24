'use client';

import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from '@/libs/zod';
import type { Schema } from '@/libs/zod';

export function AppForm({ onSubmit }: { onSubmit: (values: Schema) => void }) {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      element: "",
    },
  })

  /**
   * Execute callback function on form submit
   * @param values 
   */
  function handleSubmit(values: Schema) {
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='flex gap-4'>
        <FormField
          control={form.control}
          name="element"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="input HTML element's name" {...field} required/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
