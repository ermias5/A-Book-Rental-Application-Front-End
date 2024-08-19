import { z } from "zod";
import { patterns } from "../constants/emailPattern";

export const schema = z
  .object({
    name: z.string().min(1).optional(),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .refine((text) => patterns.email.test(text), {
        message: "Email is not valid",
      }),

    password: z
      .string()
      .min(4, { message: "Password must be at least 4 parametrs" }),

    confirmPassword: z
      .string()
      .min(4, { message: "Confirm password is required" })
      .optional(),
    location: z.string().optional(),

    phoneNumber: z
      .string()
      .optional()
      .refine((val) => patterns.phoneNumber.test(val ?? ""), {
        message: "Phone number is not valid",
      }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Password did't match",
    path: ["confirmPassword"],
  });

export type Schema = z.infer<typeof schema>;
