import { BACKEND_URL } from "@/config/envConfig";
import { SignupPayloadType } from "@/types/AuthTypes";
import axios, { AxiosError } from "axios";

export async function signupAction(data: SignupPayloadType) {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/auth/signup`, data);

    const resData = res.data;
    console.log(res.status, resData);
    return resData;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw err.response?.data;
    }
    return err;
  }
}
