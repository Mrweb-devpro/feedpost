//

import { signupAction } from "@/actions/authActions";
import { SignupPayloadType } from "@/types/AuthTypes";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const initialData = {
  email: "",
  username: "",
  password: "",
  accountType: "",
  interests: [],
  terms: false,
};

export function useSignup() {
  const [signupData, setSignupData] = useState<SignupPayloadType>(initialData);

  const { mutate } = useMutation({ mutationFn: signupAction });

  const updateData = (dataObj: Partial<SignupPayloadType>) => {
    (Object.keys(dataObj) as Array<keyof SignupPayloadType>).forEach(
      (datakey) => {
        setSignupData((prev) => ({
          ...prev,
          [datakey]: dataObj[datakey]!,
        }));
      }
    );
  };

  const clearData = () => {
    setSignupData(initialData);
  };

  return { signupData, updateData, clearData };
}
