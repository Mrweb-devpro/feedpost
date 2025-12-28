//
"use client";
import { signupAction } from "@/actions/authActions";
import { BACKEND_URL } from "@/config/envConfig";
import { SignupPayloadType } from "@/types/AuthTypes";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

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

  const { mutate } = useMutation({
    mutationFn: signupAction,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
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
  };
}
