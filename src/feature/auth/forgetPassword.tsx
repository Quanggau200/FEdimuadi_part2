
import { useState } from "react";
import { Form, Input, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;
import { Link, useNavigate } from "react-router-dom";
import { AppBackButton,AppSubmit } from "../../component/common/appButton"
import AppOtpInput from "../../component/common/appOtpInput";
import {CountDown} from "../../component/common/appCountDown";
interface ForgotPasswordFlowProps {
  title: string;
  subtitle: string;
}
const ForgotPasswordFlow = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);
  const navigate = useNavigate();
  const check=()=>
  {
    console.log("check");
  }
  // Reusable Header Component
  const FlowHeader = ({ title, subtitle }: ForgotPasswordFlowProps) => (
    <div className="text-center mb-8">
      <Title level={3} className="!mb-2">
        {title}
      </Title>
      <Text className="text-gray-400 block px-4">{subtitle}</Text>
    </div>
  );

  return (
    
  <div className="min-h-screen bg-gray-50 flex  items-center justify-center p-4 flex-col">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8 relative">
      {/* Back Button */}
     <div>
       {currentStep === 0 ? (
        <AppBackButton onClick={() => navigate("/")} />
      ) : (
        currentStep < 3 && <AppBackButton onClick={prev} />
      )}
     </div>

      {/* Custom Step Indicator */}
      {currentStep < 3 && (
        <div className="flex gap-2 mb-10 mt-12">
          {[0, 1, 2].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                s <= currentStep ? "bg-success" : "bg-gray-100"
              }`}
            />
          ))}
        </div>
      )}

      {/* Step 1: Email Input */}
      {currentStep === 0 && (
        <div className="animate-in fade-in duration-500">
          <FlowHeader
            title={t("LABEL.FORGET_PASSWORD")}
            subtitle={t("LABEL.RESET_PASSWORD_DESC")}
          />
          <Form
            layout="vertical"
            size="large"
            requiredMark={false}
            onFinish={next}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true ,message:t("LABEL.REQUIRED_EMAIL")},
                {type:"email",message:t("LABEL.INVALID_EMAIL")}
              ]}
            >
              <Input
                placeholder={t("LABEL.PLACEHOLDER_EMAIL")}
                className="h-12 rounded-lg"
              />
            </Form.Item>
            <AppSubmit type="primary" htmlType="submit">
              {t("LABEL.CONTINUE")}
            </AppSubmit>
          </Form>
        </div>
      )}

      {/* Step 2: OTP Verification */}
      {currentStep === 1 && (
        <div className="animate-in fade-in duration-500">
          <FlowHeader
            title={t("LABEL.VERIFICATION_CODE")}
            subtitle={t("LABEL.VERIFICATION_CODE_DESC")}
          />
          <Form
            onFinish={next}
            size="large"
            requiredMark={false}
            className="text-center"
          >
            <AppOtpInput length={6} onChange={check} />
            <CountDown initialSeconds={10} onResend={check} />
            <AppSubmit type="primary" htmlType="submit">
              {t("LABEL.CONTINUE")}
            </AppSubmit>
          </Form>
        </div>
      )}

{/* Step 3: Create New Password */}
      {currentStep === 2 && (
        <div className="animate-in fade-in duration-500">
          <FlowHeader
            title={t("LABEL.CREATE_NEW_PASSWORD")}
            subtitle={t("LABEL.CREATE_NEW_PASSWORD_DESC")}
          />
          <Form
            layout="vertical"
            size="large"
            requiredMark={false}
            onFinish={next}
          >
            <Form.Item
              label={t("LABEL.PASSWORD")}
              name="password"
              rules={[
                { required: true, message: t("LABEL.REQUIRED_PASSWORD") },
              ]}
            >
              <Input.Password
                placeholder={t("LABEL.PLACEHOLDER_PASSWORD")}
                title="Show/Hide"
                className="h-12 rounded-lg"
              />
            </Form.Item>
            <Form.Item
              label={t("LABEL.CONFIRM_PASSWORD")}
              name="confirm"
              rules={[
                {
                  required: true,
                  message: t("LABEL.REQUIRED_CONFIRM_PASSWORD"),
                },
              ]}
            >
              <Input.Password
                placeholder={t("LABEL.PLACEHOLDER_CONFIRM_PASSWORD")}
                title="Show/Hide"
                className="h-12 rounded-lg"
              />
            </Form.Item>
            <AppSubmit type="primary" htmlType="submit">
              {t("LABEL.CONFIRM")}
            </AppSubmit>
          </Form>
        </div>
      )}

      {/* Step 4: Success Message */}
      {currentStep === 3 && (
        <div className="text-center animate-in zoom-in duration-500">
          <div className="mb-6 relative h-40 flex items-center justify-center">
            {/* Simplified Illustration Placeholder */}
            <div className="bg-orange-100 rounded-full w-32 h-32 absolute opacity-20"></div>
            <div className="z-10 text-4xl">🎉</div>
          </div>
          <Title level={3}>{t("LABEL.SUCCESS")}</Title>
          <Text className="text-gray-400 block mb-8 px-4 text-sm">
            {t("LABEL.SUCCESS_DESC")}
          </Text>
          <AppSubmit type="primary">
            <Link to="/login">{t("LABEL.BACK_TO_LOGIN")}</Link>
          </AppSubmit>
        </div>
      )}
    </div>
  </div>
  );
};

export default ForgotPasswordFlow;