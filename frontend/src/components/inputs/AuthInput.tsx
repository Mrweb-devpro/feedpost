import { InputHTMLAttributes, useId } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput(props: AuthInputProps) {
  const randomId = useId();
  const inputId = `${props.id}-${randomId}`;

  const Asterics = <i className="text-red-500 font-bold">*</i>;

  return (
    <span className="border border-stone-300 rounded-xl flex flex-col p-2 px-3 group transition-all">
      <label htmlFor={inputId} className="capitalize  text-stone-500">
        {props.name?.toLowerCase()}
        {props.required && Asterics}
      </label>
      <input {...props} id={inputId} className="transition-all outline-none" />
    </span>
  );
}
