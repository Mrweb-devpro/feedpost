import { z } from "zod";

export const SignupSchema = z.object({
  email: z
    .string("Email is required")
    .email("Please enter a valid email address"),

  username: z
    .string("Username is required")
    .min(4, "Username must be at least 4 characters long"),

  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  firstname: z
    .string()
    .min(2, "Firstname must contain at least two(2) letters")
    .optional(),

  lastname: z
    .string()
    .min(2, "Lastname must contain at least two(2) letters")
    .optional(),

  interests: z
    .array(
      z.enum([
        "SOCIAL_MEDIA",
        "MESSAGING",
        "ENTERTAINMENT",
        "PRODUCTIVITY",
        "FINANCE",
        "HEALTH",
        "OTHERS",
      ]),
      {
        error: "Interests field is required",
      }
    )
    .nonempty("You must select at least one interest"),

  terms: z
    .boolean("You must accept the terms and conditions")
    .refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
});

export type SignupDataType = z.infer<typeof SignupSchema>;
