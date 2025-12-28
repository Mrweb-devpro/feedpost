"use client";
import AuthImage from "@/components/AuthImage";
import AuthInput from "@/components/inputs/AuthInput";
import Logo from "@/components/Logo";
import { useSignupData } from "@/hooks/useSignupData";
import {
  Ellipsis,
  HandCoins,
  Hash,
  HeartPulse,
  LucideProps,
  MessageCircleWarning,
  Music,
  Rocket,
} from "lucide-react";
import {
  FormEvent,
  ForwardRefExoticComponent,
  RefAttributes,
  useId,
  useState,
} from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function SignupPage() {
  const [page, setPage] = useState(0);
  const { mutateSignup, signupData, handleValueChange, handleInterestChange } =
    useSignupData(() => {
      setPage(0);
    });
  const isMaxPageIndx = page === 1;

  const handleTogglePage = (lv: 1 | -1) => {
    if (page === 0 && lv === -1) return;
    if (isMaxPageIndx && lv === 1) return;

    setPage((prev) => prev + lv);
  };
  const interestFields = [
    { value: "Socia Media", Icon: Hash },
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
    <section className="min-h-screen items-center p-4 flex gap-10 md:flex-row flex-col">
      <div className="md:block hidden">
        <AuthImage />
      </div>
      <form className="space-y-5 mx-auto" onSubmit={handleSubmit}>
        <Logo />
        <span className="md:hidden block">
          <AuthImage />
        </span>
        {
          [
            <>
              <h1 className="text-xl font-semibold italic text-stone-600/70">
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
                <span className="flex gap-2">
                  <AuthInput
                    name="firstname"
                    id="firstname"
                    {...handleValueChange("firstname")}
                  />
                  <AuthInput
                    name="lastname"
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

        <i className="text-red-500 text-2xl">{}</i>
        <span className="flex gap-2 w-full justify-between">
          <button
            type="button"
            className="p-2 text-stone-600 flex items-center gap-3 py-4  text-lg rounded-2xl px-5 disabled:opacity-40 hover:bg-blue-100 hover:text-stone-800"
            disabled={page === 0}
            onClick={() => handleTogglePage(-1)}
          >
            <BiLeftArrow /> previous
          </button>
          <button
            type="submit"
            className="p-2 text-white bg-blue-700 flex py-4  items-center gap-3 text-lg rounded-2xl px-5 "
          >
            {isMaxPageIndx ? "Complete Signup" : "Next"}
            {isMaxPageIndx || <BiRightArrow />}
          </button>
        </span>
      </form>
    </section>
  );
}

function InterestButtonField({
  Icon,
  interest,
  interestsList,
  handleChange,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  interest: string;
  interestsList: string[];
  handleChange: (interestValue: string) => void;
}) {
  const id = useId();
  const interestId = `interest-${id}`;

  return (
    <span className="">
      <input
        type="checkbox"
        id={interestId}
        name={interestId}
        hidden
        checked={interestsList.includes(
          interest.replaceAll(" ", "_").toUpperCase()
        )}
        className="peer"
        onChange={() => handleChange(interest)}
      />

      <label
        htmlFor={interestId}
        className="border border-stone-300 text-stone-600/90 p-2 flex items-center text-sm font-semibold gap-2 rounded-lg peer-checked:bg-blue-700 peer-checked:text-white peer-checked:border-transparent transition-all cursor-pointer hover:bg-blue-500 hover:text-white peer-checked:hover:bg-blue-700"
      >
        <Icon size={16} />
        {interest}
      </label>
    </span>
  );
}
