//
const { prisma } = require("../prisma/index");
const z = require("zod");

const SignupSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address"),

  username: z
    .string({
      required_error: "Username is required",
    })
    .min(4, "Username must be at least 4 characters long"),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),

  accountType: z.enum(
    ["Regular User", "App Devleper", "Beta Tester", "ContentCreator"],
    {
      required_error: "Account type is required",
      invalid_type_error: "Invalid account type",
    }
  ),

  interests: z
    .array(
      z.enum(
        [
          "Social Media",
          "Messaging",
          "Entertainment",
          "Productivity",
          "Finance",
          "Health",
        ],
        {
          invalid_type_error: "Invalid interest selected",
        }
      ),
      {
        required_error: "Interests field is required",
        invalid_type_error: "Interests must be an array",
      }
    )
    .nonempty("You must select at least one interest"),

  terms: z
    .boolean({
      required_error: "You must accept the terms and conditions",
      invalid_type_error: "Terms must be a boolean",
    })
    .refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
});

module.exports.signup = async function (req, res) {
  try {
    const signupData = SignupSchema.parse(req.body);
    const user = await prisma.user.create({ data: signupData });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
  }
};
