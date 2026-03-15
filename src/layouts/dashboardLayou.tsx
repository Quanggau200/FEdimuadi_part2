
import { Layout } from "antd";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Slider } from "../component/common/appSlide";
const { Content } = Layout;

const DashBoardLayout = () => {
  const{t}=useTranslation()
  return (
    <div style={{ minHeight: "100vh" }} className="container mx-auto  ">
      <div className="py-4 bg-bg-title px-layout">
        <span className="leading-5 text-base text-title-dashboard">{t("LABEL.TITLE")}</span>
        <span> / </span>
        <span className="font-bold text-dashboard"> {t("LABEL.TEXT_ACCOUNT")}</span>
      </div>

      <div className="grid md:grid-cols-[0.5fr_1.3fr] ">
        <Slider/>
        <Layout className="!bg-white">
          <Content>
            <Outlet/>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default DashBoardLayout;
