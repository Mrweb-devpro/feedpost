//

export interface SignupPayloadType {
  email: string;
  password: string;
  username: string;
  accountType: string;
  interests: string[];
  terms: boolean;
}
export interface LoginPayloadType {
  email: string;
  password: string;
}
