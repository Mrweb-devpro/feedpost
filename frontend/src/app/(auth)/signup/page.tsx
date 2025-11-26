"use client";

import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";

// ==================== STATIC BLUE BACKGROUND (with image) ====================
const StaticBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* Subtle blue-toned depth overlay – completely static */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-950 via-blue-900 to-blue-900 opacity-70" />
      {/* Optional ultra-faint blue glows for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl" />
    </div>
  );
};

// ==================== GLASS FORM (static, with responsive tweaks) ====================
const GlassForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="backdrop-blur-xl bg-gray-800/70 rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 space-y-5">
        {children}
      </div>
    </div>
  );
};

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SelectField = ({ label, value, onChange, options }: SelectFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-semibold mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none cursor-pointer"
        style={
          {
            "--tw-ring-color": "oklch(68.5% 0.169 237.323)",
          } as React.CSSProperties
        }
      >
        <option value="" className="bg-gray-900">
          Select an option...
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
// ==================== INPUT / BUTTON (static) ====================
const InputField = ({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="mb-4">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
    />
  </div>
);

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
      variant === "primary"
        ? disabled
          ? "bg-blue-800/50 text-blue-200 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600 shadow-lg shadow-blue-500/25"
        : "bg-gray-700/50 text-white border border-white/20 hover:bg-gray-600/50"
    } ${disabled && variant === "primary" ? "opacity-70" : ""}`}
  >
    {children}
  </button>
);

// Simple SVG icons (self-contained)
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-1 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 6.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
    <path fill="none" d="M1 1h22v22H1z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577v-2.17c-3.338.724-4.043-1.61-4.043-1.61c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.744.083-.729.083-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.418-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22v3.293c0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

interface FormDataType {
  email: string;
  otp: string;
  username: string;
  password: string;
  accountType: string;
  interests: string[];
  terms: boolean;
}
const interests = [
  "Social Media",
  "Messaging",
  "Entertainment",
  "Productivity",
  "Finance",
  "Health",
];
// ==================== MAIN PAGE ====================
export default function SignupPage() {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    otp: "",
    username: "",
    password: "",
    accountType: "",
    interests: [],
    terms: false,
  });
  const maxPages = 4;
  const [page, setPage] = useState(1);

  const handleGoBack = (curPageNumber: number) => {
    setPage(curPageNumber - 1);
  };
  const handleNextPage = (curPageNumber: number) => {
    setPage(curPageNumber + 1);
  };

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  const isValid = () =>
    formData.email.includes("@") && formData.email.includes(".");

  const pagesProps: PagePropsTypes = {
    updateFormData,
    isValid,
    formData,
    onNext: handleNextPage,
    onGoBack: handleGoBack,
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 relative overflow-hidden">
      <StaticBackground />

      {/* Page-level logo */}
      <Logo className="w-35 mr-auto" />
      <div className="absolute top-4 left-4 flex items-center"></div>

      <GlassForm>
        <StepCounter currentStep={page} steps={maxPages} />
        {
          [
            <EmailPage {...pagesProps} />,
            <VerifyEmailPage {...pagesProps} />,
            <CreateUsernameAndPasswordPage {...pagesProps} />,
            <PreferencesPage {...pagesProps} />,
          ][page - 1]
        }
      </GlassForm>
    </div>
  );
}
interface PagePropsTypes {
  updateFormData: (data: any) => void;
  isValid: () => boolean;
  formData: FormDataType;
  onNext: (curPageNumber: number) => void;
  onGoBack: (curPageNumber: number) => void;
}

function EmailPage({
  updateFormData,
  isValid,
  formData,
  onNext,
}: PagePropsTypes) {
  return (
    <>
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        Sign Up
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>

      {/* Social buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Button
          onClick={() => alert("Sign up with Google")}
          variant="secondary"
        >
          <GoogleIcon />
          Google
        </Button>
        <Button
          onClick={() => alert("Sign up with GitHub")}
          variant="secondary"
        >
          <GitHubIcon />
          Github
        </Button>
      </div>

      {/* Or separator */}
      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-600" />
        <p className="mx-4 text-gray-400">Or</p>
        <div className="flex-1 h-px bg-gray-600" />
      </div>

      <InputField
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(v) => updateFormData({ email: v })}
      />

      <p className="text-gray-400 text-sm text-center mb-6">
        By continuing, you agree to our User Agreement and acknowledge that you
        understand the Privacy Policy.
      </p>

      <Button onClick={() => onNext(1)} disabled={!isValid()}>
        Continue &gt;
      </Button>
    </>
  );
}
function VerifyEmailPage({
  updateFormData,
  isValid,
  formData,
  onNext,
  onGoBack,
}: PagePropsTypes) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    const otpArray = formData.otp ? formData.otp.split("") : Array(6).fill("");
    otpArray[index] = value.slice(-1); // only keep last digit
    const newOtp = otpArray.join("");
    updateFormData({ otp: newOtp });

    // move to next input if value entered
    if (value && index < 5) {
      (inputsRef.current[index + 1] as HTMLInputElement)?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      (inputsRef.current[index - 1] as HTMLInputElement)?.focus();
    }
  };

  return (
    <>
      <GoBackButton
        onClick={() => {
          onGoBack(2);
        }}
        disabled={!isValid()}
      />

      <h2 className="text-2xl font-bold text-white text-center mb-4">
        Verify Your Email
      </h2>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: 6 }, (_, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="number"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center text-lg font-bold rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.otp?.[i] || ""}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <Button onClick={() => onNext(2)} disabled={!isValid()}>
        Continue &gt;
      </Button>
    </>
  );
}
function CreateUsernameAndPasswordPage({
  updateFormData,
  isValid,
  formData,
  onNext,
  onGoBack,
}: PagePropsTypes) {
  return (
    <>
      <GoBackButton
        onClick={() => {
          onGoBack(3);
        }}
        disabled={!isValid()}
      />

      <h2 className="text-2xl font-bold text-white text-center mb-2">
        Create your username and password
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Feedpost is anonymous, so your username is what you’ll go by here.
        Choose wisely—because once you get a name, you can’t change it.
      </p>

      <InputField
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(v) => updateFormData({ username: v })}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(v) => updateFormData({ password: v })}
      />

      <p className="text-gray-400 text-sm text-center mb-6">
        By continuing, you agree to our User Agreement and acknowledge that you
        understand the Privacy Policy.
      </p>

      <Button onClick={() => onNext(3)} disabled={!isValid()}>
        Continue &gt;
      </Button>
    </>
  );
}

const PreferencesPage = ({
  formData,
  updateFormData,
  isValid,
  onGoBack,
}: PagePropsTypes) => {
  return (
    <>
      <GoBackButton
        onClick={() => {
          onGoBack(4);
        }}
        disabled={!isValid()}
      />
      <h2 className="text-3xl font-bold text-white mb-2">Almost Done!</h2>
      <p className="text-white/70 mb-6">Tell us about your interests</p>

      <SelectField
        label="Account Type"
        value={formData.accountType}
        onChange={(value) => updateFormData({ accountType: value })}
        options={[
          "Regular User",
          "App Developer",
          "Beta Tester",
          "Content Creator",
        ]}
      />

      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-3">
          Interested In
        </label>
        <div className="grid grid-cols-2 gap-3">
          {interests.map((interest) => {
            const isSelected = (formData.interests || []).includes(interest);
            return (
              <button
                key={interest}
                onClick={() => {
                  const current = formData.interests || [];
                  const updated = current.includes(interest)
                    ? current.filter((i: string) => i !== interest)
                    : [...current, interest];
                  updateFormData({ interests: updated });
                }}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  isSelected
                    ? "text-white"
                    : "bg-white/10 text-white border border-white/20"
                }`}
                style={
                  isSelected
                    ? { backgroundColor: "oklch(70.7% 0.165 254.624)" }
                    : {}
                }
              >
                {interest}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.terms}
            onChange={(e) => updateFormData({ terms: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-white/20 focus:ring-2"
            style={
              {
                accentColor: "oklch(68.5% 0.169 237.323)",
                "--tw-ring-color": "oklch(68.5% 0.169 237.323)",
              } as React.CSSProperties
            }
          />
          <span className="text-white/90 text-sm">
            I agree to the Terms of Service and Privacy Policy
          </span>
        </label>
      </div>
      <br />
      <Button onClick={() => alert("Completed Signup")} disabled={!isValid()}>
        Complete Signup
      </Button>
    </>
  );
};
function GoBackButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
        disabled
          ? "bg-blue-800/50 text-blue-200 cursor-not-allowed"
          : "text-white hover:bg-blue-500 active:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.1]"
      } ${disabled ? "opacity-70" : ""}`}
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
}
function StepCounter({
  steps,
  currentStep,
}: {
  steps: number;
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      {Array.from({ length: steps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepNumber} className="flex items-center gap-2">
            {/* Step Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold transition-all duration-200
                ${isActive ? "bg-blue-500 text-white border-blue-500" : ""}
                ${isCompleted ? "bg-green-500 text-white border-green-500" : ""}
                ${
                  !isActive && !isCompleted
                    ? "bg-gray-300 text-gray-500 border-gray-400"
                    : ""
                }
              `}
            >
              {stepNumber}
            </div>

            {/* Connector line (except last step) */}
            {stepNumber !== steps && (
              <div
                className={`w-10 h-0.5 transition-all duration-200
                  ${isCompleted ? "bg-green-500" : "bg-gray-300"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
