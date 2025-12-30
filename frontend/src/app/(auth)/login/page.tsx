import LoginForm from "@/components/forms/LoginForm";
import Logo from "@/components/Logo";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Login" };

export default async function LoginPage() {
  return (
    <section className="p-4">
      <Logo />
      <LoginForm />
    </section>
  );
}
