import { z } from "zod";
import { patterns } from "../constants/emailPattern";

export const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((text) => patterns.email.test(text), {
      message: "Email is not valid",
    }),
  password: z.string().min(4, { message: "Required" }),
  // confirmPassword: z.string().refine(
  //   (val: string, ctx: any) => {
  //     if (val !== ctx.parent.password) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   { message: "password didn't match" }
  // ),
});

export type Schema = z.infer<typeof schema>;
