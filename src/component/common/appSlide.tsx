import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import icBigUser from "../../assets/images/icons/ic-big-user.svg";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SvgIconCard,
  SvgIconManager,
  SvgLogout,
  SvgProfile,
  SvgAddress,
  SvgVote,
} from "../../util/contains/svgIcon";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
type MenuItem = Required<MenuProps>["items"][number] & { path?: string };

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  path?: string,
  children?: MenuItem[],
): MenuItem {
  return { key, icon, children, label, path } as MenuItem;
}
const { Sider } = Layout;
export const Slider = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const profileUser=useSelector((state:RootState)=>state.auth.profile);


  const items: MenuItem[] = [
    getItem(
      t("LABEL.ACCOOUNT"),
      "1",
      <SvgProfile className="!w-5 !h-5 icon-menu" />,
      "dashboard",
    ),
    getItem(
      t("LABEL.ADD_ADDRESS"),
      "2",
      <SvgAddress className="icon-menu" />,
      "address",
    ),
    getItem(
      t("LABEL.CASH_MAGERMENT"),
      "3",
      <SvgIconCard className="!w-5 !h-5 icon-menu" />,
      "payment",
    ),
    getItem(
      t("LABEL.STORE_MANAGER"),
      "4",
      <SvgIconManager className="!w-5 !h-5 icon-menu " />,
      "store-manager",
    ),
    getItem(t("LABEL.VOTE"), "5", <SvgVote className="icon-menu" />, "vote"),
  ];
  const selectKey = (
    items.find((i) => i?.path === location.pathname.replace("/", ""))?.key ||
    "1"
  )?.toString();
  return (
    <>
      <Sider
        className="!w-auto !max-w-none !min-w-0 h-screen !bg-bg-slider"
        style={{ width: "auto", maxWidth: "none", minWidth: 0 }}
      >
        <div className="flex justify-center p-6 gap-4 items-center">
          <div className="">
            <img src={icBigUser} alt="user" className="!w-16 !h-16" />
          </div>
          <div className="">
            <h3 className="font-bold text-base text-gray-800 m-0">
             {profileUser?.username}
            </h3>
            <p className="text-sm text-gray-500 m-0 mt-1">
              Thành viên từ 10/12/2021
            </p>
          </div>
        </div>
        <Menu
          selectedKeys={[selectKey]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          className="!bg-white"
          onClick={(e) => {
            const item = items.find((i) => i?.key === e.key) as any;
            if (item?.path) {
              navigate(item.path);
            }
          }}
        />
      </Sider>
    </>
  );
};
