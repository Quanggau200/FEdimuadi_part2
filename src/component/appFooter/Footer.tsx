
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typography } from 'antd';
import {useTranslation} from "react-i18next";
const { Title, Link } = Typography;

const Footer = () => {
    const {t} = useTranslation();
    // Data mapping để giảm HTML
    const menus = [
        {
            title: t("FOOTER.CUSTOMER_SUPPORT"),
            items: [t("FOOTER.HOW_TO_BUY"), t("FOOTER.PAYMENT"), t("FOOTER.SHIPPING"), t("FOOTER.RETURN_REFUND"), t("FOOTER.POLICY")]
        },
        {
            title: t("FOOTER.ABOUT_DIMUADI"),
            items: [t("FOOTER.ABOUT"), t("FOOTER.PRIVACY_POLICY"), t("FOOTER.TERMS"), t("FOOTER.BRAND"), t("FOOTER.CONTACT")]
        }
    ];

    const socials = [
        { icon: <FaFacebookSquare />, label: "Facebook" },
        { icon: <FaInstagram />, label: "Instagram" },
        { icon: <FaLinkedin />, label: "Linkedin" }
    ];

    return (
        <footer className="text-sm">
            {/* Upper Footer: Dùng Grid trực tiếp ở đây */}
            <div className="bg-[#eef2f6] py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Map Menus */}
                    {menus.map((menu, idx) => (
                        <div key={idx}>
                            <Title level={5} className="!text-[15px] !mb-4 uppercase">{menu.title}</Title>
                            <nav className="flex flex-col gap-2">
                                {menu.items.map(item => (
                                    <Link key={item} href="#" className="!text-gray-600 hover:!text-success transition-colors">{item}</Link>
                                ))}
                            </nav>
                        </div>
                    ))}

                    {/* Socials */}
                    <div>
                        <Title level={5} className="!text-[15px] !mb-4 uppercase">{t("FOOTER.FOLLOW_DIMUADI")}</Title>
                        <div className="flex flex-col gap-3">
                            {socials.map((soc, i) => (
                                <a key={i} href="#" className="flex items-center gap-3 text-gray-600 hover:text-success font-medium">
                                    <span className="text-xl">{soc.icon}</span> {soc.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Apps */}
                    <div>
                        <Title level={5} className="!text-[15px] !mb-4 uppercase">{t("FOOTER.DOWNLOAD_APP")}</Title>
                        <div className="space-y-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="w-32 hover:opacity-80 cursor-pointer" alt="iOS" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="w-32 hover:opacity-80 cursor-pointer" alt="Android" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer: Thông tin công ty */}
            <div className="bg-[#687481] text-white py-8 px-4 text-center">
                <div className="max-w-4xl mx-auto opacity-90 space-y-1 text-[13px]">
                    <h4 className="font-bold text-base mb-3">{t("FOOTER.COMPANY_NAME")}</h4>
                    <p>{t("FOOTER.ADDRESS")}</p>
                    <p>{t("FOOTER.HOTLINE")} | {t("FOOTER.EMAIL")}</p>
                    <p className="pt-2 text-[11px] opacity-60">{t("FOOTER.MSDN")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;