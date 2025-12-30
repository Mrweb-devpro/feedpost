"use client";
import { useLogin } from "@/hooks/useLogin";
import AuthImage from "../AuthImage";
import AuthInput from "../inputs/AuthInput";
import { FormEventHandler } from "react";

export default function LoginForm() {
  const { mutateLogin } = useLogin();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    if (!email || !password) return;

    mutateLogin({ email, password });
  };

  return (
    <form
      className="flex flex-col md:flex-row gap-4 items-center"
      onSubmit={handleSubmit}
    >
      <span>
        <AuthImage />
      </span>

      <div className="flex flex-col gap-6 items-center w-full">
        <h1 className="text-3xl font-bold text-blue-700">
          Login into your account
        </h1>
        <p className="text-lg text-stone-600 w-3/4 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        </p>
        <span className="flex gap-4 flex-col w-full *:self-center *:w-full">
          <AuthInput name="email" type="email" required />
          <AuthInput name="password" type="password" required />
        </span>
        <button
          type="submit"
          className="text-white bg-blue-700 flex p-3  items-center gap-3 rounded-xl px-5 w-fit font-semibold"
        >
          login
        </button>
      </div>
    </form>
  );
}
