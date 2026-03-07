import { useState, useRef } from "react";
import { Input } from "antd";
import type { InputRef } from "antd";
interface AppOtpInputProps {
  length?: number;
  onChange?: (value: string) => void;
}
const AppOtpInput = ({ length = 6, onChange }: AppOtpInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<InputRef[]>([]);
  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^[0-9]$/.test(value) && value !== "") {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Notify parent of full OTP
    if (onChange) {
      onChange(newOtp.join(""));
    }
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handlePaste = (index: number, e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length - index);
    const newOtp = [...otp];
    pastedData.split("").forEach((char, i) => {
      newOtp[index + i] = char;
    });
    setOtp(newOtp);
    if (onChange) {
      onChange(newOtp.join(""));
    }
    if (pastedData.length < length - index) {
      inputRefs.current[index + pastedData.length]?.focus();
    }
  };

  const handleKeyUp = (index: number) => {
    // Auto-focus next input
    if (otp[index] && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {otp.map((digit, index) => (
        <Input
          key={index}
          id={`otp-input-${index}`}
          value={digit}
          type="password"
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onKeyUp={() => handleKeyUp(index)}
          onPaste={(e) => handlePaste(index, e)}
          maxLength={1}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          className="w-12 h-12 text-center text-2xl font-bold !rounded-3xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
        />
      ))}
    </div>
  );
};

export default AppOtpInput;
