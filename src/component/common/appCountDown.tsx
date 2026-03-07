import { useState, useEffect, useRef } from "react";
import { Button, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
interface CountDownProps {
  initialSeconds?: number;
  onFinish?: () => void;
  onResend?: () => void;
}
export const CountDown = ({
  initialSeconds = 60,
  onFinish,
  onResend,
}: CountDownProps) => {
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(initialSeconds);
  const [onExpire, setOnExpire] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setOnExpire(true);
          onFinish?.();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  const handleResend = () => {
    setSeconds(initialSeconds);
    setOnExpire(false);
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setOnExpire(true);
          onFinish?.();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    onResend?.();
  };
  const format = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
  };
  if (onExpire) {
    return (
      <Button type="link" onClick={handleResend}>
        {t("LABEL.RESEND")}
      </Button>
    );
  }
  return (
    <div>
      <Text
        className={`text-xs mb-6 block font-bold tracking-widest ${seconds === 0 ? "text-red-400" : "text-gray-400"}`}
      >
        {format(seconds)}
      </Text>
    </div>
  );
};
