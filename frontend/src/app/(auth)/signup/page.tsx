"use client";
import { FormEvent, useState } from "react";
import AuthImage from "@/components/AuthImage";
import GithubAuthButton from "@/components/buttons/GithubAuthButton";
import GoogleAuthButton from "@/components/buttons/GoogleAuthButton";
import InterestButtonField from "@/components/buttons/InterestButtonField";
import AuthInput from "@/components/inputs/AuthInput";
import Logo from "@/components/Logo";
import { useSignupData } from "@/hooks/useSignupData";
import {
  Check,
  Ellipsis,
  HandCoins,
  Hash,
  HeartPulse,
  Mail,
  MessageCircleWarning,
  Music,
  Rocket,
} from "lucide-react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function SignupPage() {
  const [page, setPage] = useState(0);
  const { mutateSignup, signupData, handleValueChange, handleInterestChange } =
    useSignupData(() => {
      setPage(0);
    });
  const isMaxPageIndx = page === 2;

  const handleTogglePage = (lv: 1 | -1) => {
    if (page === 0 && lv === -1) return;
    if (isMaxPageIndx && lv === 1) return;

    setPage((prev) => prev + lv);
  };
  const interestFields = [
    { value: "Social Media", Icon: Hash },
    { value: "Messaging", Icon: MessageCircleWarning },
    { value: "Health", Icon: HeartPulse },
    { value: "Finance", Icon: HandCoins },
    { value: "Entertainment", Icon: Music },
    { value: "Productivity", Icon: Rocket },
    { value: "Others", Icon: Ellipsis },
  ];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isMaxPageIndx) return handleTogglePage(1);
    console.log(signupData);

    mutateSignup(signupData);
  }
  return (
    <section className="min-h-screen w-screen items-center p-4 flex gap-10 md:flex-row flex-col">
      <div className="md:block hidden">
        <AuthImage />
      </div>
      <form
        className="gap-5 mx-auto w-full flex flex-col"
        onSubmit={handleSubmit}
      >
        <Logo />
        <span className="md:hidden block">
          <AuthImage />
        </span>
        {
          [
            <>
              <h1 className="text-lg/tight font-medium italic text-stone-500/70 text-center mb-5">
                Please Select your prefered method of signing in
              </h1>
              <span className="flex gap-4 items-center self-center">
                <GoogleAuthButton />
                <i className="text-stone-400">OR</i>
                <GithubAuthButton />
              </span>
              <button
                type="button"
                className="border flex  items-center gap-2 px-4 py-2 rounded-xl border-stone-400/50 bg-blue-600 text-white w-fit self-center"
                onClick={() => handleTogglePage(1)}
              >
                <Mail size={29} />
                Email & Password
              </button>
            </>,
            <>
              <h1 className="text-lg/tight font-semibold italic text-stone-600/70">
                {"Let's"} sign you up for your journey...
              </h1>
              <div className="flex flex-col gap-4">
                <AuthInput
                  name="email"
                  id="email"
                  required
                  type="email"
                  {...handleValueChange("email")}
                />
                <span className="flex gap-2 flex-col md:flex-row">
                  <AuthInput
                    name="firstname"
                    id="firstname"
                    required
                    {...handleValueChange("firstname")}
                  />
                  <AuthInput
                    name="lastname"
                    required
                    id="lastname"
                    {...handleValueChange("lastname")}
                  />
                </span>
                <AuthInput
                  name="username"
                  id="username"
                  required
                  {...handleValueChange("username")}
                />
                <AuthInput
                  name="passsword"
                  id="passsword"
                  required
                  type="password"
                  {...handleValueChange("password")}
                />
              </div>
            </>,
            <>
              <h2 className="text-stone-600/80 font-bold text-lg">
                Select your interests
              </h2>

              <div className="w-full flex flex-wrap items-center justify-center gap-2">
                {interestFields.map((interest, i) => (
                  <InterestButtonField
                    key={i}
                    interestsList={signupData.interests}
                    interest={interest.value}
                    Icon={interest.Icon}
                    handleChange={handleInterestChange}
                  />
                ))}
              </div>
              <br />
              <label className="flex items-start gap-2 text-sm md:justify-start justify-center">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-blue-700 cursor-pointer"
                  {...handleValueChange("terms")}
                />

                <span className="text-gray-700">
                  Do you agree with our{" "}
                  <a
                    href="#"
                    className="text-blue-700 underline hover:opacity-80"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-700 underline hover:opacity-80"
                  >
                    conditions
                  </a>
                  ?
                </span>
              </label>
              <br />
            </>,
          ][page]
        }

        {page === 0 || (
          <span className="flex gap-2 w-full justify-between flex-wrap text-base">
            <button
              type="button"
              className="p-2 text-stone-600 flex items-center gap-3 py-4   rounded-2xl px-5 disabled:opacity-40 hover:bg-blue-100 hover:text-stone-800"
              disabled={page === 0}
              onClick={() => handleTogglePage(-1)}
            >
              <BiLeftArrow /> Back
            </button>
            <button
              type="submit"
              className="p-2 text-white bg-blue-700 flex py-4  items-center gap-3  rounded-2xl px-5 "
            >
              {isMaxPageIndx ? (
                <>
                  <Check />
                  Complete Signup
                </>
              ) : (
                "Next"
              )}
              {isMaxPageIndx || <BiRightArrow />}
            </button>
          </span>
        )}
      </form>
    </section>
  );
}
