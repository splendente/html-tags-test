"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/libs/zod";
import { AppCard } from "@/components/app-card";
import { AppForm } from "@/components/app-form";

import type { FormData } from "@/types";
import type { Schema } from "@/libs/zod";

export default function Home() {
  const [elements, setElements] = useState<string[]>([]);
  const { reset, setError} = useForm<Schema>({ resolver: zodResolver(schema) });

  /**
   * Form submit handler
   * @param formData
   */
  const onSubmit = (formData: FormData) => {
    const result = schema.safeParse(formData);
    if (result.success) {
      if (!elements.includes(result.data.element)) {
        setElements([...elements, result.data.element]);
        reset();
      }
    }
    if (result.error) {
      setError("element", {
        type: "custom",
        message: result.error.errors[0].message,
      });
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">List of HTML Elements</h1>
      <AppForm onSubmit={onSubmit} />
      <ol className="flex flex-col gap-4 mt-8">
        {elements.map((element, index) => {
          return (
            <li key={element}>
              <AppCard name={element} index={index+1} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
