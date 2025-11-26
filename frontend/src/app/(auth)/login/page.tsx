"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==================== COMPONENTS ====================

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background with your blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(68.5%_0.169_237.323)] via-[oklch(58.5%_0.189_237.323)] to-[oklch(48.5%_0.209_237.323)]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ backgroundColor: "oklch(78.5% 0.189 237.323)" }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ backgroundColor: "oklch(68.5% 0.169 237.323)" }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ backgroundColor: "oklch(58.5% 0.209 237.323)" }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle Grid */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Glass Form Container
interface GlassFormProps {
  children: React.ReactNode;
}

const GlassForm = ({ children }: GlassFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-md"
    >
      {/* Glass Effect Container */}
      <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};

// Step Indicator Component
interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              index + 1 <= currentStep
                ? "text-white"
                : "bg-white/20 text-white/50"
            }`}
            style={
              index + 1 <= currentStep
                ? { backgroundColor: "oklch(68.5% 0.169 237.323)" }
                : {}
            }
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {index + 1 <= currentStep ? (
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            ) : (
              index + 1
            )}
          </motion.div>
          {index < totalSteps - 1 && (
            <div
              className={`w-12 h-1 mx-2 rounded ${
                index + 1 < currentStep ? "" : "bg-white/20"
              }`}
              style={
                index + 1 < currentStep
                  ? { backgroundColor: "oklch(68.5% 0.169 237.323)" }
                  : {}
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Input Field Component
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
}: InputFieldProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <label className="block text-white text-sm font-semibold mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${
            icon ? "pl-12" : "pl-4"
          } pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
          style={
            {
              "--tw-ring-color": "oklch(68.5% 0.169 237.323)",
            } as React.CSSProperties
          }
        />
      </div>
    </motion.div>
  );
};

// Select Field Component
interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SelectField = ({ label, value, onChange, options }: SelectFieldProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
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
    </motion.div>
  );
};

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
        variant === "primary"
          ? "text-white hover:shadow-lg"
          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      style={
        variant === "primary" && !disabled
          ? {
              backgroundColor: "oklch(68.5% 0.169 237.323)",
              boxShadow: disabled
                ? "none"
                : "0 10px 30px oklch(68.5% 0.169 237.323 / 0.3)",
            }
          : {}
      }
    >
      {children}
    </motion.button>
  );
};

// ==================== STEP COMPONENTS ====================

// Step 1: Basic Info
interface Step1Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const Step1BasicInfo = ({ formData, updateFormData }: Step1Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
      <p className="text-white/70 mb-6">Let's start with the basics</p>

      <InputField
        label="Full Name"
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={(value) => updateFormData({ name: value })}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        }
      />

      <InputField
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={(value) => updateFormData({ email: value })}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        }
      />

      <InputField
        label="Username"
        type="text"
        placeholder="johndoe"
        value={formData.username}
        onChange={(value) => updateFormData({ username: value })}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        }
      />
    </motion.div>
  );
};

// Step 2: Security
interface Step2Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const Step2Security = ({ formData, updateFormData }: Step2Props) => {
  const getPasswordStrength = () => {
    if (formData.password.length < 6)
      return { label: "Weak", color: "bg-red-500", width: "33%" };
    if (formData.password.length < 10)
      return { label: "Medium", color: "bg-yellow-500", width: "66%" };
    return {
      label: "Strong",
      color: "oklch(68.5% 0.169 237.323)",
      width: "100%",
    };
  };

  const strength = getPasswordStrength();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-3xl font-bold text-white mb-2">
        Secure Your Account
      </h2>
      <p className="text-white/70 mb-6">Create a strong password</p>

      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={(value) => updateFormData({ password: value })}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        }
      />

      <InputField
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={(value) => updateFormData({ confirmPassword: value })}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      />

      {/* Password Strength Indicator */}
      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <span className="text-white/70 text-sm">Password Strength</span>
          <span className="text-white/70 text-sm">{strength.label}</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${
              typeof strength.color === "string" &&
              strength.color.startsWith("bg-")
                ? strength.color
                : ""
            }`}
            style={
              typeof strength.color === "string" &&
              !strength.color.startsWith("bg-")
                ? { backgroundColor: strength.color }
                : {}
            }
            initial={{ width: 0 }}
            animate={{ width: strength.width }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Step 3: Preferences
interface Step3Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const Step3Preferences = ({ formData, updateFormData }: Step3Props) => {
  const interests = [
    "Social Media",
    "Messaging",
    "Entertainment",
    "Productivity",
    "Finance",
    "Health",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
              <motion.button
                key={interest}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    ? { backgroundColor: "oklch(68.5% 0.169 237.323)" }
                    : {}
                }
              >
                {interest}
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
      >
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
      </motion.div>
    </motion.div>
  );
};

// ==================== MAIN PAGE COMPONENT ====================

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    interests: [],
    terms: false,
  });

  const totalSteps = 3;

  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle submission logic here
    alert("Account created successfully! 🎉");
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.username;
      case 2:
        return (
          formData.password &&
          formData.password === formData.confirmPassword &&
          formData.password.length >= 6
        );
      case 3:
        return formData.accountType && formData.terms;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatedBackground />

      <GlassForm>
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "oklch(68.5% 0.169 237.323)" }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <Step1BasicInfo
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 2 && (
            <Step2Security
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 3 && (
            <Step3Preferences
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 flex gap-4">
          {currentStep > 1 && (
            <Button onClick={handleBack} variant="secondary">
              Back
            </Button>
          )}
          {currentStep < totalSteps ? (
            <Button onClick={handleNext} disabled={!isStepValid()}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!isStepValid()}>
              Create Account
            </Button>
          )}
        </div>

        {/* Login Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/70 mt-6"
        >
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold hover:underline"
            style={{ color: "oklch(88.5% 0.169 237.323)" }}
          >
            Login
          </a>
        </motion.p>
      </GlassForm>
    </div>
  );
}
