import { loginAction } from "@/actions/authActions";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { mutate } = useMutation({
    mutationFn: loginAction,
    onSuccess(data) {
      if (data.success) {
        console.log(data);
      }
    },
    onError(error) {},
  });

  return {
    mutateLogin: mutate,
  };
}
