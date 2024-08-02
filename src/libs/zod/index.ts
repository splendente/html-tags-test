import * as z from "zod";
import { htmlTagList } from "@/constants/html-tag-list";

export const schema = z.object({
  element: z
    .string({
      invalid_type_error: "Must be a string",
    })
    .refine((element) => htmlTagList.includes(element), {
      message: "Invalid HTML element",
    }),
});

export type Schema = z.infer<typeof schema>;
