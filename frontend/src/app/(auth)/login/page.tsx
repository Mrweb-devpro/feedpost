import AuthImage from "@/components/AuthImage";
import AuthInput from "@/components/inputs/AuthInput";
import Logo from "@/components/Logo";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <form>
      <Logo />
      <AuthImage />

      <h1>Login</h1>
      <AuthInput name="email" type="email" />
      <AuthInput name="password" type="password" />
      <button> login</button>
    </form>
  );
}
