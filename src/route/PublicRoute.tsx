import {lazy} from "react";
import {ErrorPage} from "../component/common/ErrorPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
const Home = lazy(() => import('../feature/product/product.tsx'))
const SignUp = lazy(() => import('../feature/auth/register.tsx'))
const SignIn = lazy(() => import('../feature/auth/login.tsx'))
const ForgotPassword = lazy(() => import('../feature/auth/forgetPassword.tsx'))
export const publicRoute = [
    {
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/', element: <Home/>
            }
        ]
    },
    {
        element: <AuthLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/login', element: <SignIn/>
            },
            {
                path: '/register', element: <SignUp/>
            },
            {
                path: '/forgot-password', element: <ForgotPassword/>
            }
        ]
    }
]