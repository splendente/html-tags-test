"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/libs/zod";
import { FormInput } from "@/components/form-input";
import { Card } from "@/components/card";

import type { FormData } from "@/types";

export default function Home() {
  const [elements, setElements] = useState<string[]>([]);
  const methods = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (formData: FormData) => {
    const result = schema.safeParse(formData);
    if (result.success) {
      if (!elements.includes(result.data.element)) {
        setElements([...elements, result.data.element]);
        methods.reset();
      }
    }
    if (result.error) {
      methods.setError("element", {
        type: "custom",
        message: result.error.errors[0].message,
      });
    }
  };

  return (
    <main>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput id="element" label="HTML Tags" type="text" />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
      <ol>
        {elements.map((element) => {
          return (
            <li key={element}>
              <Card name={element} />
            </li>
          );
        })}
      </ol>
    </main>
  );
}
