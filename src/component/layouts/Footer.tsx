
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const linkStyle = "text-gray-600 hover:text-blue-600 transition-colors duration-200 block no-underline";
    const socialStyle = "flex items-center gap-3 text-gray-600 mb-3 transition-colors hover:text-blue-600 cursor-pointer font-medium";
    const appBtnStyle = "block w-36 mb-2 hover:opacity-80 transition-opacity cursor-pointer";
    return (
        <footer className=" text-sm">
            <div className="bg-[#eef2f6] py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-[15px]">
                            TRỢ GIÚP KHÁCH HÀNG
                        </h3>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className={linkStyle}>Hướng Dẫn Mua Hàng</a></li>
                            <li><a href="#" className={linkStyle}>Thanh Toán</a></li>
                            <li><a href="#" className={linkStyle}>Vận Chuyển</a></li>
                            <li><a href="#" className={linkStyle}>Trả Hàng & Hoàn Tiền</a></li>
                            <li><a href="#" className={linkStyle}>Chính Sách Mua Hàng</a></li>
                            <li><a href="#" className={linkStyle}>Chính Sách Bảo Hành</a></li>
                        </ul>
                    </div>

                    {/* Cột 2: Các liên kết khác */}
                    <div className="lg:pt-[38px]">
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className={linkStyle}>Giới Thiệu Về Dimuadi</a></li>
                            <li><a href="#" className={linkStyle}>Chính Sách Bảo Mật</a></li>
                            <li><a href="#" className={linkStyle}>Điều Khoản Dimuadi</a></li>
                            <li><a href="#" className={linkStyle}>Chính Hãng</a></li>
                            <li><a href="#" className={linkStyle}>Đối tác bán hàng</a></li>
                            <li><a href="#" className={linkStyle}>Liên Hệ</a></li>
                        </ul>
                    </div>

                    {/* Cột 3: Theo dõi Dimuadi */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-[15px]">
                            THEO DÕI DIMUADI
                        </h3>
                        <div className="flex flex-col">
                            <a href="#" className={socialStyle}>
                                <FaFacebookSquare className="text-2xl" /> <span>Facebook</span>
                            </a>
                            <a href="#" className={socialStyle}>
                                <FaInstagram className="text-2xl" /> <span>Instagram</span>
                            </a>
                            <a href="#" className={socialStyle}>
                                <FaLinkedin className="text-2xl" /> <span>Linkedin</span>
                            </a>
                        </div>
                    </div>

                    {/* Cột 4: Tải App */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-[15px]">
                            TẢI APP DIMUADI
                        </h3>
                        <div className="flex flex-col items-start">
                            <a href="#" className={appBtnStyle}>
                                <img
                                    className="w-full h-auto rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="Download on App Store"
                                />
                            </a>
                            <a href="#" className={appBtnStyle}>
                                <img
                                    className="w-full h-auto rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-[#687481] text-white py-6 px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <h4 className="font-bold uppercase text-base mb-2">
                        CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ D2C VIỆT NAM
                    </h4>

                    <div className="space-y-1 text-[13px] leading-relaxed text-gray-200">
                        <p>
                            <span className="font-semibold text-white">Địa chỉ:</span> Tầng 7, số 97-99 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Tp Hà Nội
                        </p>
                        <p>
                            <span className="font-semibold text-white">Hotline:</span> 024 3217 1304
                        </p>
                        <p>
                            <span className="font-semibold text-white">Email:</span> support@accesstrade.vn
                        </p>

                        <p className="mt-2 opacity-80">
                            <span className="font-semibold text-white">Thông tin mã số doanh nghiệp:</span> 0109327194 do Phòng đăng ký kinh doanh - Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp ngày 01/09/2020.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;