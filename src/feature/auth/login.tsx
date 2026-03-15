import background from "../../assets/images/other/background.svg";
import { Link, useNavigate } from "react-router-dom";
import { Form, App as AppAnt } from "antd";
import { useTranslation } from "react-i18next";
import {useLoginMutation} from "../auth/authApi"
import { AppInput } from "../../component/common/appInput";
import { AppPassword } from "../../component/common/appInput";
import {
  AppButtonSignWith,
  AppCheckbox,
  AppSubmit,
} from "../../component/common/appButton";
import { FaFacebook } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setCredentials } from "../auth/authSlice"
import {handleFormError} from "../../util/handleFormErrorr"
const SignIn = () => {
  const dispatch=useDispatch()
  const { t } = useTranslation();
  const navigate=useNavigate()
  const [login,{isLoading}]=useLoginMutation()
  const [form] = Form.useForm()
  const onFinish= async(values:any)=>{
    try {
      const res=await login(values).unwrap();
      dispatch(setCredentials({token:res?.data?.access_token}))
      navigate("/")
    } catch (error:any) {
      handleFormError(error,form)
    }
  }
  return (
    <div className="bg-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full flex">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 xl:px-32 bg-white z-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide mb-2">
                {t("LOGIN.TITLE")}
              </h1>
              <p className="text-gray-500 text-sm">{t("LOGIN.DESC")}</p>
            </div>

            <Form
              form={form}
              method="POST"
              className="space-y-5 px-3 "
              layout="vertical"
              requiredMark={false}
              scrollToFirstError={{behavior:"smooth",block:"start"}}
               size="large"
              onFinish={onFinish}
            >
              <Form.Item
                label={<span className="text-xl">{t("LABEL.EMAIL")}</span>}
                name="email"
                rules={[
                  {
                    required: true,
                    message: t("LABEL.REQUIRED_EMAIL"),
                  },
                  {
                    type:"email",
                    message:t("LABEL.INVALID_EMAIL")
                  },
                  {
                     
                  }
                ]}
              >
                <AppInput placeholder={t("LABEL.EMAIL")} />
              </Form.Item>

              <Form.Item
                label={<span className="text-xl">{t("LABEL.PASSWORD")}</span>}
                name="password"
                rules={[
                  { required: true, message: t("LABEL.REQUIRED_CONFIRM_PASSWORD") },
                ]}
              >
                <AppPassword placeholder={t("LABEL.PASSWORD")} />
              </Form.Item>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <AppCheckbox />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-gray-700 font-medium cursor-pointer"
                  >
                    {t("LABEL.REMEMBER_ME")}
                  </label>
                </div>
                <Link to={{pathname:"/forgot-password"}} className="!text-success font-bold hover:underline">
                  {t("LABEL.FORGET_PASSWORD")}
                </Link>
              </div>

              <AppSubmit
              loading={isLoading}
                htmlType="submit"
                className="!h-12 !text-lg"
              >
                {t("LOGIN.TITLE")}
              </AppSubmit>

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
            </Form>

            <div className="mt-6 text-center text-gray-500">
              {t("LABEL.ALREADY_HAVE_ACCOUNT")}
              <Link
                to={{
                  pathname: "/register",
                }}
                className="!text-success font-bold hover:underline"
              >
                {" "}
                {t("SIGNUP.TITLE")}
              </Link>
            </div>
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
    </div>
  );
};
export default SignIn;
