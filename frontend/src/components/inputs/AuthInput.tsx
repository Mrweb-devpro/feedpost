import { InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput(props: AuthInputProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}
