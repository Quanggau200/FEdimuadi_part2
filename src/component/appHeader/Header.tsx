import group from "../../assets/images/icons/Group.svg";
import rotate from "../../assets/images/icons/Rotate.svg";
import tick from "../../assets/images/icons/Tick.svg";
import like from "../../assets/images/icons/Like.svg";
import logo from "../../assets/images/icons/Logo.svg";
import menu from "../../assets/images/icons/Menu.svg";
import biglogo from "../../assets/images/icons/BigLogo.svg";
import { SvgProfile,SvgIconManager,SvgIconCard,SvgLogout } from "../../util/contains/svgIcon";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Input, Badge, Avatar } from "antd";
import { useGetUserQuery } from "../../feature/auth/authApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Skeleton,Dropdown } from "antd";
import ic_profile from "../../assets/images/icons/ic-profile.svg";
import { DownOutlined, } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
type HeaderItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  count?: number;
};
type HeaderTop = {
  label: string;
  icon: string;
};

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data: profile, isLoading } = useGetUserQuery(undefined, {
    skip: !token,
  });
  const itemsHeader: HeaderTop[] = [
    {
      label: t("HEADER.FREE_SHIP"),
      icon: group,
    },
    {
      label: t("HEADER.FREE_RETURN"),
      icon: rotate,
    },
    {
      label: t("HEADER.INSURANCE_RETURN"),
      icon: tick,
    },
    {
      label: t("HEADER.GENUINE_PRODUCTS"),
      icon: like,
    },
  ];
  const navItems: HeaderItem[] = [
    {
      key: "1",
      label: "cart",
      icon: <AiOutlineShoppingCart size={24} />,
      count: 0,
    },
    {
      key: "2",
      label: "notice",
      icon: <GoBell size={24} />,
      count: 0,
    },
  ];
  const items: MenuProps["items"] = [
    {
    key: "1",
       label: (
      <span className="hover:!text-success ">
        {t("LABEL.PROFILE")}
      </span>
    ),
    icon:<SvgProfile className="icon-menu"/>,
    onClick:()=>{
      navigate("/dashboard");
    }
  },
  {
    key: "2",
    label: (
      <span className="hover:!text-success ">
        {t("LABEL.STORE_MANAGER")}
      </span>
    ),
      icon:<SvgIconManager className="icon-menu"/>,
      onClick:()=>{
        navigate("/store-manager");
      }
  },
  {
    key: "3",
    label: (
      <span className="hover:!text-success ">
       
        {t("LABEL.CASH_MAGERMENT")}
      </span>
    ),
      icon:<SvgIconCard className="icon-menu"/>,
      onClick:()=>{
        navigate("/payment");
      }
  },
  {
    key: "4",
    label: (
      <span className="group flex items-center gap-2">
        {t("LABEL.LOGOUT")}
      </span>
    ),
      icon:<SvgLogout className="icon-menu"/>
  },
  ];
  return (
    <div className="header ">
      <div className="bg-white border-b border-gray-200 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-end space-x-6 text-sm">
          {itemsHeader.map((item) => (
            <div className="flex items-center space-x-2" key={item.label}>
              <img src={item.icon} alt="Group Image" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* header_main */}
      <header className=" sticky top-0 z-50 shadow-lg bg-success">
        <div className="max-w-7xl mx-auto px-4 py-2.5 max-w-[992px] ">
          <div className="flex items-center justify-between gap-4">
            {/* Left Section */}
            <div className="flex items-center gap-4 flex-1 ">
              <button className="text-white">
                <img src={menu} alt="Logo" />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-8" />
                <img
                  src={biglogo}
                  alt="big-logo"
                  className="h-5 hidden sm:block"
                />
              </Link>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl relative bg-white rounded-lg">
                <Input
                  placeholder={t("LABEL.PLACEHOLDER_SEARCH")}
                  prefix={<CiSearch size={20} className="text-gray-400" />}
                  className="w-full px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <CiSearch size={20} className="text-gray-400" />
                </button>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={{
                    pathname: `${item.path}`,
                  }}
                  title={item.label}
                  type="button"
                  className="text-white hover:bg-white/10 p-2 rounded-lg transition !py-1"
                >
                  <Badge count={item.count} size="small" offset={[2, -2]}>
                    <span className="text-white">{item.icon}</span>
                  </Badge>
                </Link>
              ))}
              <div className="flex items-center gap-2 pb-1.5 rounded-lg text-white hover:bg-white/10 transition">
                {/* Avatar / Icon */}
                {isLoading ? (
                  <Skeleton.Avatar active size="small" />
                ) : profile?.data ? (
                  <Avatar
                    size={28}
                    src={ic_profile}
                    className="bg-white/20 text-white"
                  />
                ) : (
                 <Link to="/login">
                 <FaRegUser size={22} className="text-white"/>
                 </Link>
                )}

                {/* Username */}
                {profile?.data && (
                  <>
                    <span className="text-sm font-medium max-w-[90px] truncate">
                      {profile.data.username}
                    </span>

                    {/* Dropdown */}
                    <Dropdown menu={{ items }} trigger={["click"]}>
                      <span className="flex items-center pt-1 cursor-pointer">
                        <DownOutlined className="text-xs" />
                      </span>
                    </Dropdown>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end header main */}
    </div>
  );
};
