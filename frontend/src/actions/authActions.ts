import { SignupPayloadType } from "@/types/AuthTypes";
import axios from "axios";

export async function signupAction(data: SignupPayloadType) {
  try {
    const res = await axios.post("http://localhost:8080/");
  } catch (err) {}
}
