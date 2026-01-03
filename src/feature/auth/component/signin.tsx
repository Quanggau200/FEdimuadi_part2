
import background from '../../../assets/images/background.svg'
import {Link} from "react-router-dom";
import {Form, Input} from "antd";
import '../auth.module.scss'
const SignIn =()=>{

    return (

        <div className="bg-white min-h-screen flex items-center justify-center overflow-hidden">

            <div className="w-full h-full flex">

                <div
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 xl:px-32 bg-white z-10">
                    <div className="w-full max-w-md">

                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide mb-2">Welcome
                                Back</h1>
                            <p className="text-gray-500 text-sm">Welcome back! Please enter your details.</p>
                        </div>

                        <Form  method="POST" className="space-y-5 px-3 " layout="vertical" requiredMark={false} onClick={()=>check}>

                            <Form.Item
                                label={<span className="text-xl">Email</span>}
                                name="Email"
                                rules={[{ required: true, message: 'Nhập email không được để trống !' }]}
                            >
                                <Input
                                    placeholder=" Nhập email của bạn "
                                    className="!w-full !px-4 !py-3 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-red-400 !text-sm"
                                />
                            </Form.Item>

                            <Form.Item
                                label={<span className="text-xl">Mật khẩu</span>}
                                name="Mật khẩu"
                                rules={[{ required: true, message: 'Mật khẩu không được để trống ' }]}
                            >
                                <Input
                                    placeholder="Nhập mật khẩu "
                                    className="!w-full !px-4 !py-3 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-red-400 !text-sm"
                                />
                            </Form.Item>

                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember"
                                           className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-400 accent-red-500"/>
                                    <label htmlFor="remember" className="ml-2 text-gray-700 font-medium cursor-pointer">Remember
                                        me</label>
                                </div>
                                <a href="#" className="text-gray-900 font-bold hover:underline">Forgot password</a>
                            </div>

                            <button type="submit"
                                    className="w-full bg-red bg-red-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-200 transform hover:-translate-y-0.5">
                                Sign in
                            </button>

                            <button type="button"
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5"
                                     alt="Google Logo"/>
                                Sign in with Google
                            </button>
                            <button type="button"
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5"
                                     alt="Google Logo"/>
                                Sign in with Facebook
                            </button>
                        </Form>

                        <div className="mt-6 text-center text-gray-500">
                            Already have an account? <Link to={{
                                pathname: '/register',
                            }} className="text-red-500 font-bold hover:underline">Log in
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center relative">
                    <img src={background}
                         alt="Background Image"
                         className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>

    )
}
export default SignIn