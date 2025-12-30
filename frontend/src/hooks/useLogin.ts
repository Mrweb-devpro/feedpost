import { loginAction } from "@/actions/authActions";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

export function useLogin(onSuccessCallback: () => void) {
  return useMutation({
    mutationFn: loginAction,
    onSuccess(data) {
      if (data.success) {
        onSuccessCallback();
        console.log(data.data.user);
        Swal.fire({
          icon: "success",
          title: "Login Was Successful",
          text: `Welcome, ${data.data.user.fullName}.`,
          timer: 2000,
          timerProgressBar: true,
        });
      }
    },
    onError(error: { message: string } & { errors: { message: string }[] }) {
      if (error?.errors) {
        const html = error.errors
          .map((err) => `<li>⚠ ${err.message}</li>`)
          .join("");

        Swal.fire({
          icon: "error",
          title: "Invalid input",
          html: `<ul style="text-align:center;color:red;">${html}</ul>`,
        });
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: error.message,
        confirmButtonColor: "oklch(54.6% 0.245 262.881)",
        preConfirm: () => {
          console.log("🟢🟢");
        },
      });
    },
  });
}
