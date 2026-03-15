import { Layout, Input, Radio, DatePicker, Button, Form } from "antd";
import "./dashboard.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Gender } from "../../types/types";
import { useUpdateProfileMutation } from "./accountApi";
import { message } from "antd";
import { AppSubmit } from "../../component/common/appButton";
const { Content } = Layout;
export const GENDER_OPTIONS = [
  { label: "Nam", value: Gender.MALE },
  { label: "Nữ", value: Gender.FEMALE },
  { label: "Khác", value: Gender.OTHER },
] as const;
const ProfileDashboard = () => {
  const infoUser = useSelector((state: RootState) => state.auth.profile);
  const [form] = Form.useForm();
  const [updateUser, {isLoading}]=useUpdateProfileMutation()
  useEffect(() => {
    if (infoUser) {
      form.setFieldsValue({
        username: infoUser.username,
        gender:infoUser.gender ?? Gender.OTHER,
        phone: infoUser.phone,
      });
    }
  }, [infoUser]);
  const onUpdate=async(values:any)=>{
    try {
      await updateUser(values).unwrap();
      message.success("Update Profile Success");
    } catch (error) {
      message.error("Update Profile Failed");
    }
  }
  const { t } = useTranslation();
  return (
    <Layout className="min-h-screen bg-gray-50 font-sans">
      {/* --- MAIN CONTENT --- */}
      <Content className=" max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">
        {/* Form Area */}
        <div className="flex-1 bg-white  px-8 pt-layout-profile">
          <h2 className="text-2xl font-semibold text-gray-800 pb-layout-profile-bottom line-height border-b border-gray-300">
            {t("LABEL.ACCOOUNT")}
          </h2>
          <div className="mb-10">
            <h3 className="text-sm font-bold text-icon uppercase leading-5 tracking-wider py-3 border-b border-gray-300">
              {t("LABEL.PROFILE")}
            </h3>

            <Form
              initialValues={{
                username: infoUser?.username,
                phone: infoUser?.phone,
              }}
              layout="horizontal"
              colon={false}
              form={form}
              className="max-w-xl !mt-4"
              onFinish={onUpdate}
            >
              <Form.Item name="username" label="Họ tên">
                <Input size="large" />
              </Form.Item>

              <Form.Item name="gender" label="Giới tính">
                <Radio.Group className="flex gap-6">
                  {GENDER_OPTIONS.map((opt) => (
                    <Radio key={opt.value} value={opt.value}>
                      {opt.label}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>

              <Form.Item name="birthday" label="Sinh nhật">
                <DatePicker
                  placeholder="dd/mm/yyyy"
                  className="w-full"
                  size="large"
                  format="DD/MM/YYYY"
                />
              </Form.Item>

              <Form.Item name="phone" label="Điện thoại">
                <Input size="large" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 5 }}>
                <AppSubmit
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isLoading}
                  className="!w-fit !text-base"
                >
                  Cập nhật thay đổi
                </AppSubmit>
              </Form.Item>
            </Form>
          </div>

          {/* Section: Thông tin tài khoản (Email) */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 leading-5 py-2 border-t border-b border-gray-300">
              {t("LABEL.INFOR_PROFILE")}
            </h3>
            <div className="flex items-center">
              <span className="w-32 text-gray-600 font-bold">
                {t("LABEL.EMAIL_PROFILE")}
              </span>
              <span className="text-gray-800">{infoUser?.email}</span>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ProfileDashboard;
