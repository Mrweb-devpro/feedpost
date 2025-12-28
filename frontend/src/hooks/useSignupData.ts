//
"use client";
import { signupAction } from "@/actions/authActions";

import { SignupPayloadType } from "@/types/AuthTypes";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

const initialData: SignupPayloadType = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  accountType: "",
  interests: [],
  terms: false,
};

export function useSignupData() {
  const [signupData, setSignupData] = useState<SignupPayloadType>(initialData);

  const { mutate, error, isPending } = useMutation({
    mutationFn: signupAction,
    onSuccess(data) {
      console.log(data);
    },
    onError(error: { message: string }) {
      Swal.fire({
        icon: "error",
        title: "Signup failed",
        text: error.message,
        confirmButtonColor: "oklch(54.6% 0.245 262.881)",
      });
    },
  });

  const updateData = (dataObj: Partial<SignupPayloadType>) => {
    (Object.keys(dataObj) as Array<keyof SignupPayloadType>).forEach(
      (datakey) => {
        setSignupData((prev) => ({
          ...prev,
          [datakey]: dataObj[datakey],
        }));
      }
    );
  };
  const handleInterestChange = (interestValue: string) => {
    const interestValueInCaps = interestValue
      .replaceAll(" ", "_")
      .toUpperCase();
    if (signupData.interests.includes(interestValueInCaps)) {
      setSignupData((prev) => ({
        ...prev,
        interests: [
          ...prev.interests.filter((int) => int !== interestValueInCaps),
        ],
      }));
    } else
      setSignupData((prev) => ({
        ...prev,
        interests: [...prev.interests, interestValueInCaps],
      }));
  };

  const handleValueChange = (name: keyof SignupPayloadType) => ({
    value: signupData[name] as string | number | readonly string[],
    onChange(e: ChangeEvent<HTMLInputElement>) {
      if (e.target.type === "checkbox")
        return updateData({ [name]: e.target.checked });
      updateData({ [name]: e.target.value });
    },
  });

  const clearData = () => {
    setSignupData(initialData);
  };

  return {
    signupData,
    updateData,
    clearData,
    mutateSignup: mutate,
    handleValueChange,
    handleInterestChange,
    error,
    isPending,
  };
}
