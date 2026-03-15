import {lazy} from "react";
import {ErrorPage} from "../component/common/ErrorPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import DashBoardLayout from "../layouts/dashboardLayou.tsx";
const Home = lazy(() => import('../feature/product/product.tsx'))
const SignUp = lazy(() => import('../feature/auth/register.tsx'))
const SignIn = lazy(() => import('../feature/auth/login.tsx'))
const ForgotPassword = lazy(() => import('../feature/auth/forgetPassword.tsx'))
const DashBoard=lazy(()=>import('../feature/dashboard/account.tsx'))
const Address=lazy(()=>import('../feature/dashboard/adress.tsx'))
const Payment=lazy(()=>import('../feature/dashboard/payment.tsx'))
const StoreManager=lazy(()=>import('../feature/dashboard/storeManager.tsx'))
const Vote=lazy(()=>import('../feature/dashboard/vote.tsx'))
export const publicRoute = [
    {
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/', element: <Home/>
            },
            {
            element:<DashBoardLayout/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path: '/dashboard',
                    element: <DashBoard/>
                },
                {
                    path: '/address',
                    element: <Address/>
                },
                {
                    path: '/payment',
                    element: <Payment/>
                },
                {
                    path: '/store-manager',
                    element: <StoreManager/>
                },
                {
                    path: '/vote',
                    element: <Vote/>
                }
            ]
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