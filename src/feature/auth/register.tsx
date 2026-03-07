import background from "../../assets/images/other/background.svg";
import { Link,useNavigate } from "react-router-dom";
import { Form } from "antd";
import { FaFacebook } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { AppInput,AppPassword } from "../../component/common/appInput";
import { AppCheckbox,AppButtonSignWith,AppSubmit } from "../../component/common/appButton";
import { useRegisterMutation } from "../auth/authApi";
import { App as AppAnt } from "antd";
import { useDispatch } from "react-redux";
import { setCredentials } from "../auth/authSlice";
const Signup = () => {
  const dispatch=useDispatch()
  const { t } = useTranslation();
  const [register,{isLoading}]=useRegisterMutation()
  const {message}=AppAnt.useApp()
  const navigate=useNavigate()
  const onSubmit=async(values:any)=>{
    try {
      const res=await register(values).unwrap();
      message.success(t("LABEL.REGISTER_SUCCESS"))
      dispatch(setCredentials({token:res.access_token}))
      navigate("/")
    } catch (error) {
      message.error(t("LABEL.REGISTER_FAIL"))
    }
  }
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 animate-fade-in">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
              {t("SIGNUP.TITLE")}
            </h1>
            <p className="text-gray-500">{t("SIGNUP.DESC")}</p>
          </div>

          {/* Form */}
          <Form
            name="register"
            layout="vertical"
            initialValues={{ remember: true }}
            size="large"
            requiredMark={false}
            className="register-form"
            onFinish={onSubmit}
          >
            <Form.Item
              label={
                <span className="font-semibold text-gray-700">
                  {t("LABEL.FULLNAME")}
                </span>
              }
              name="username"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <AppInput placeholder={t("LABEL.PLACEHOLDER_FULLNAME")} />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-semibold text-gray-700">
                  {t("LABEL.EMAIL")}
                </span>
              }
              name="email"
              rules={[
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Please input your E-mail!" },
              ]}
            >
              <AppInput placeholder={t("LABEL.PLACEHOLDER_EMAIL")} />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-semibold text-gray-700  ">
                  {t("LABEL.PASSWORD")}
                </span>
              }
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <AppPassword placeholder={t("LABEL.PLACEHOLDER_PASSWORD")} />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-semibold text-gray-700">
                  {t("LABEL.CONFIRM_PASSWORD")}
                </span>
              }
              name="confirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The passwords do not match!"),
                    );
                  },
                }),
              ]}
            >
              <AppPassword
                placeholder={t("LABEL.PLACEHOLDER_CONFIRM_PASSWORD")}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
            >
              <AppCheckbox className="text-gray-600">
                {t("LABEL.AGREEMENT")}{" "}
                <a
                  href="#"
                  className="!text-success font-semibold hover:underline"
                >
                  {t("LABEL.AGREEMENT_LINK")}
                </a>
              </AppCheckbox>
            </Form.Item>
            {/* Submit Button */}
            <Form.Item>
              <AppSubmit
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
              >
                {t("SIGNUP.TITLE")}
              </AppSubmit>
            </Form.Item>
            <AppButtonSignWith
              icon={
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google Logo"
                />
              }
            >
              {t("LABEL.SIGNIN_WITH_GOOGLE")}
            </AppButtonSignWith>
            <AppButtonSignWith
              icon={<FaFacebook className="w-5 h-5 !bg-white !text-blue-700" />}
            >
              {t("LABEL.SIGNIN_WITH_FACEBOOK")}
            </AppButtonSignWith>

            <div className="mt-6 text-center text-gray-500">
              {t("LABEL.ALREADY_HAVE_ACCOUNT")}{" "}
              <Link
                to={{
                  pathname: "/login",
                }}
                className="!text-success font-bold hover:underline"
              >
                {t("LOGIN.TITLE")}
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center relative">
          <img
            src={background}
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>
    </div>
  );
};
export default Signup;
