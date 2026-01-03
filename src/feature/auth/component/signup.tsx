import background from '../../../assets/images/background.svg'
import {Link} from "react-router-dom";
import {Button, Checkbox, Form, Input} from "antd";
import { FaFacebook } from "react-icons/fa6";
const Signup = () => {
    return (
        <div className="flex min-h-screen bg-white">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 animate-fade-in">
                <div className="w-full max-w-md">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                            Create Account
                        </h1>
                        <p className="text-gray-500">
                            Join us! Please enter your details to sign up.
                        </p>
                    </div>

                    {/* Form */}
                    <Form
                        name="register"
                        layout="vertical"
                        initialValues={{remember: true}}
                        size="large"
                        requiredMark={false}
                        className="register-form"
                    >

                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Full Name</span>}
                            name="fullname"
                            rules={[{required: true, message: 'Please input your full name!'}]}
                        >
                            <Input placeholder="Enter your full name"
                                   className="rounded-xl bg-gray-50 border-gray-200 hover:border-red-400 !focus:border-red-500"/>
                        </Form.Item>

                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Email</span>}
                            name="email"
                            rules={[
                                {type: 'email', message: 'The input is not valid E-mail!'},
                                {required: true, message: 'Please input your E-mail!'},
                            ]}
                        >
                            <Input placeholder="Enter your email"
                                   className="rounded-xl bg-gray-50 border-gray-200 hover:border-red-400 focus:border-red-500"/>
                        </Form.Item>

                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Password</span>}
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password placeholder="Create a password"
                                            className="rounded-xl bg-gray-50 border-gray-200 hover:border-red-400 focus:border-red-500"/>
                        </Form.Item>


                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Confirm Password</span>}
                            name="confirm"
                            dependencies={['password']}
                            rules={[
                                {required: true, message: 'Please confirm your password!'},
                                ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm your password"
                                            className="rounded-xl bg-gray-50 border-gray-200 hover:border-red-400 focus:border-red-500"/>
                        </Form.Item>
                        <Form.Item name="agreement" valuePropName="checked" rules={[
                            {validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))},
                        ]}>
                            <Checkbox className="text-gray-600">
                                I agree to the <a href="#" className="text-red-500 font-semibold hover:underline">Terms
                                & Conditions</a>
                            </Checkbox>
                        </Form.Item>
                        {/* Submit Button */}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                className="h-12 rounded-xl !bg-red-500 hover: bg-red-600 border-none text-lg font-semibold shadow-md shadow-red-200"
                            >
                                Sign up
                            </Button>
                        </Form.Item>
                            <Button
                                className="w-full bg-gray-50  border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5"
                                     alt="Google Logo"/>
                                Sign in with Google
                            </Button>
                            <Button
                                className="w-full bg-gray-50 mt-3 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200">
                                <FaFacebook
                                className="w-5 h-5 bg-white text-blue-700"/>
                                Sign in with Facebook
                            </Button>


                        <div className="mt-6 text-center text-gray-500">
                            Already have an account? <Link to={{
                            pathname: '/login',
                        }} className="text-red-500 font-bold hover:underline">Log
                            in
                        </Link>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center relative overflow-hidden">
                <img
                    src={background}
                    alt="Background"
                    className="z-10 w-3/4 max-w-lg object-contain mix-blend-multiply filter contrast-125"
                />
            </div>
        </div>
    );
}
export default Signup